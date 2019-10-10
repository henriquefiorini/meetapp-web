import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Form, Button } from '~/components';

import AvatarInput from './components/AvatarInput';

import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  avatar_id: Yup.string().required(),
});

function AvatarForm() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const isLoading = useSelector(state => state.user.isLoading);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
      <AvatarInput name="avatar" placeholder="Change picture" />
      <Button positive type="submit" disabled={isLoading}>
        Update Profile Picture
      </Button>
    </Form>
  );
}

export default AvatarForm;
