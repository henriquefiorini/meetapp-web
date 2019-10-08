import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdEdit } from 'react-icons/md';

import { Api } from '~/services';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

function AvatarForm({ initialData }) {
  const dispatch = useDispatch();

  const [previewUrl, setPreviewUrl] = useState(
    initialData.avatar && initialData.avatar.url,
  );

  async function handleChange(e) {
    // Upload selected file
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await Api.post('files', data);
    const { id, url } = response.data;

    // Update user profile with the avatar_id
    dispatch(updateProfileRequest({ avatar_id: id }));

    // Update preview URL
    setPreviewUrl(url);
  }

  return (
    <AvatarInput.Container>
      <AvatarInput.Wrapper htmlFor="avatar">
        <AvatarInput.Image src={previewUrl} />
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <AvatarInput.Button>
          <MdEdit size={16} />
          Edit
        </AvatarInput.Button>
      </AvatarInput.Wrapper>
    </AvatarInput.Container>
  );
}

AvatarForm.propTypes = {
  initialData: PropTypes.shape({
    avatar: PropTypes.shape({
      id: PropTypes.number,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
};

AvatarForm.defaultProps = {
  initialData: null,
};

export default AvatarForm;
