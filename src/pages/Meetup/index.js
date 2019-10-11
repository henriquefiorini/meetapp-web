import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdEvent, MdRoom } from 'react-icons/md';

import { Page, Button } from '~/components';

import { Api } from '~/services';
import { formatDate } from '~/util';

import {
  Container,
  Image,
  Date,
  Location,
  Description,
  MediaObject,
} from './styles';

import { cancelMeetup } from '~/store/modules/meetup/actions';

function Meetup({ match }) {
  const dispatch = useDispatch();

  const [meetup, setMeetup] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      const { data } = await Api.get(`/user/meetups/${match.params.id}`);
      setMeetup(data);
      setIsLoading(false);
    }
    loadMeetup();
  }, [match.params.id]);

  function handleCancellation(id) {
    dispatch(cancelMeetup(id));
  }

  return (
    <>
      {!isLoading && meetup ? (
        <Page
          title={meetup.title}
          actions={
            <>
              <Button primary path={`/meetups/${meetup.id}/edit`}>
                Edit Meetup
              </Button>
              <Button negative onClick={() => handleCancellation(meetup.id)}>
                Cancel Meetup
              </Button>
            </>
          }
        >
          <Container>
            <Image url={meetup.banner.url} />
            <Date>
              <MediaObject>
                <MdEvent size={32} />
                <div>
                  <strong>Date</strong>
                  <p>{formatDate(meetup.date)}</p>
                </div>
              </MediaObject>
            </Date>
            <Location>
              <MediaObject>
                <MdRoom size={32} />
                <div>
                  <strong>Location</strong>
                  <p>{meetup.location}</p>
                </div>
              </MediaObject>
            </Location>
            <Description>
              <strong>Description</strong>
              <p>{meetup.description}</p>
            </Description>
          </Container>
        </Page>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Meetup;
