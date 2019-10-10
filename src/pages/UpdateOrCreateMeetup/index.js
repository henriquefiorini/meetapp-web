import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { parseISO } from 'date-fns';
import { Page, Card, Form, Input, DatePicker, Button } from '~/components';

import ImageInput from './components/ImageInput';

import { Api } from '~/services';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  banner_id: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  date: Yup.date()
    .min(new Date())
    .required(),
  location: Yup.string().required(),
});

function UpdateOrCreateMeetup({ match }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);

  const [meetup, setMeetup] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function loadMeetup(id) {
      const response = await Api.get(`/user/meetups/${id}`);
      const data = {
        ...response.data,
        date: parseISO(response.data.date),
      };
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

  function handleSubmit(data) {
    if (meetup && meetup.id) {
      dispatch(
        updateMeetupRequest({
          ...data,
          id: meetup.id,
        }),
      );
    } else {
      dispatch(createMeetupRequest(data));
    }
  }

  return (
    <>
      {!isFetching ? (
        <Page title={meetup ? meetup.title : 'Create Meetup'}>
          <Card>
            <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
              <ImageInput
                name="banner"
                label="Cover Image"
                placeholder="Choose an image..."
              />
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
              <DatePicker
                name="date"
                label="Date"
                placeholder="Event date and time"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
              />
              <Input
                name="location"
                type="text"
                label="Location"
                placeholder="Where it will happen?"
              />
              <Button positive type="submit" disabled={isLoading}>
                {meetup ? 'Save changes' : 'Create Meetup'}
              </Button>
            </Form>
            {meetup && <Button path={`/meetups/${meetup.id}`}>Cancel</Button>}
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
