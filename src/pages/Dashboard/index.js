import React, { useState, useEffect } from 'react';

import { Page } from '~/components';

import { Api } from '~/services';

import {
  MeetupsList,
  Meetup,
  MeetupTitle,
  MeetupDate,
  MeetupIcon,
  Empty,
  EmptyEmoji,
  EmptyText,
} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const { data } = await Api.get('/user/meetups');
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
              <MeetupTitle>{meetup.title}</MeetupTitle>
              <MeetupDate>{meetup.date}</MeetupDate>
              <MeetupIcon />
            </Meetup>
          ))}
        </MeetupsList>
      ) : (
        <Empty>
          <EmptyEmoji>(^-^*)</EmptyEmoji>
          <EmptyText>You don&apos;t have any meetups yet.</EmptyText>
          <EmptyText>
            Try creating one by hitting the create button above!
          </EmptyText>
        </Empty>
      )}
    </Page>
  );
}
