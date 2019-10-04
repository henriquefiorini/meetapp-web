import React, { useState, useEffect } from 'react';

import { Page } from '~/components';

import { Api } from '~/services';

import {
  MeetupsList,
  Meetup,
  Title,
  Date,
  Icon,
  Empty,
  Emoji,
  Text,
} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const { data } = await Api.get('meetups/organizing');
      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Page title="My meetups">
      {meetups ? (
        <MeetupsList>
          {meetups.map(meetup => (
            <Meetup key={meetup.id} to={`/meetup/${meetup.id}`}>
              <Title>{meetup.title}</Title>
              <Date>{meetup.date}</Date>
              <Icon />
            </Meetup>
          ))}
        </MeetupsList>
      ) : (
        <Empty>
          <Emoji>(^-^*)</Emoji>
          <Text>You don&apos;t have any meetups yet.</Text>
          <Text>Try creating one by hitting the create button above!</Text>
        </Empty>
      )}
    </Page>
  );
}
