import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Page, Card, Form, Input, Button } from '~/components';

import { Api } from '~/services';

import BannerInput from './BannerInput';

const schema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  date: Yup.date()
    .min(new Date())
    .required(),
  location: Yup.string().required(),
});

function UpdateOrCreateMeetup({ match }) {
  const [meetup, setMeetup] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function loadMeetup(id) {
      const { data } = await Api.get(`/user/meetups/${id}`);
      setMeetup(data);
      setIsFetching(false);
    }

    if (match.params && match.params.id) {
      const { id } = match.params;
      loadMeetup(id);
    } else {
      setIsFetching(false);
    }
  }, [match.params, match.params.id]);

  function handleSubmit({ title, description, date, location }) {
    console.tron.log(title, description, date, location);
  }

  return (
    <>
      {!isFetching ? (
        <Page title={meetup ? meetup.title : 'Create Meetup'}>
          <Card>
            <Form
              initialData={meetup}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              <BannerInput banner={meetup && meetup.banner} />
              <Input
                name="title"
                type="text"
                label="Title"
                placeholder="My Awesome Meetup"
              />
              <Input
                name="description"
                type="text"
                label="Description"
                placeholder="e.g.: This meetup will bring together people who want to talk about and share awesome things."
                multiline
              />
              <Input name="date" type="datetime-local" label="Date" />
              <Input
                name="location"
                type="text"
                label="Location"
                placeholder="Where it will happen?"
              />
              <Button positive type="submit">
                {meetup ? 'Save changes' : 'Create Meetup'}
              </Button>
            </Form>
            {meetup && <Button path={`/meetup/${meetup.id}`}>Cancel</Button>}
          </Card>
        </Page>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

UpdateOrCreateMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default UpdateOrCreateMeetup;
