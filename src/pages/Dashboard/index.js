import React, { useState, useEffect } from 'react';

import { Page, Button } from '~/components';

import { Api } from '~/services';
import { formatDate } from '~/util';

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
    <Page
      title="My meetups"
      actions={
        <Button primary path="/create">
          Create Meetup
        </Button>
      }
    >
      {meetups ? (
        <MeetupsList>
          {meetups.map(meetup => (
            <Meetup key={meetup.id} to={`/meetups/${meetup.id}`}>
              <MeetupTitle>{meetup.title}</MeetupTitle>
              <MeetupDate>{formatDate(meetup.date)}</MeetupDate>
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
