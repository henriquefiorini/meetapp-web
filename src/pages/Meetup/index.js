import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MdDateRange, MdPersonPin } from 'react-icons/md';
import { Page } from '~/components';

import { Api } from '~/services';

import {
  Grid,
  Image,
  Date,
  Location,
  Description,
  MediaObject,
} from './styles';

function Meetup({ match }) {
  const [meetup, setMeetup] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      const { data } = await Api.get(`meetups/organizing/${match.params.id}`);
      setMeetup(data);
      setIsLoading(false);
    }
    loadMeetup();
  }, [match.params.id]);

  return (
    <>
      {!isLoading && meetup ? (
        <Page title={meetup.title}>
          <Grid>
            <Image src="http://localhost:3333/files/a38c69108dc1ea2f51a4749f8aceda34.jpg" />
            <Date>
              <MediaObject>
                <MdDateRange size={36} />
                <div>
                  <strong>Date</strong>
                  <p>{meetup.date}</p>
                </div>
              </MediaObject>
            </Date>
            <Location>
              <MediaObject>
                <MdPersonPin size={36} />
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
          </Grid>
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
