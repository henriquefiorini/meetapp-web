import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdEdit } from 'react-icons/md';

import { Api } from '~/services';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { StyledAvatarInput } from './styles';

function AvatarInput({ avatar }) {
  const dispatch = useDispatch();

  const [previewUrl, setPreviewUrl] = useState(avatar && avatar.url);

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
    <StyledAvatarInput>
      <label htmlFor="avatar">
        <img src={previewUrl} alt="" />
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <span>
          <MdEdit size={16} />
          Edit
        </span>
      </label>
    </StyledAvatarInput>
  );
}

AvatarInput.propTypes = {
  avatar: PropTypes.shape({
    id: PropTypes.number,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

AvatarInput.defaultProps = {
  avatar: {},
};

export default AvatarInput;
