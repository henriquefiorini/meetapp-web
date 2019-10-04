import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Page } from '~/components';
import { Api } from '~/services';

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
          <p>{meetup.description}</p>
          <span>{meetup.date}</span>
          <span>{meetup.location}</span>
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
