import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Image, Icon, Text, Input } from './styles';

import { Api } from '~/services';

function BannerInput({ banner }) {
  const [preview, setPreview] = useState(banner && banner.url);

  async function handleChange(e) {
    // Upload selected file
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await Api.post('files', data);
    const { id, url } = response.data;

    // Update user profile with the avatar_id
    console.tron.log(id, url);

    // Update preview URL
    setPreview(url);
  }

  return (
    <Wrapper htmlFor="banner">
      <Label>Cover Image</Label>
      <Image url={preview}>
        {!preview && (
          <>
            <Icon size={40} />
            <Text>Choose image...</Text>
          </>
        )}
      </Image>
      <Input id="banner" name="banner" onChange={handleChange} />
    </Wrapper>
  );
}

BannerInput.propTypes = {
  banner: PropTypes.shape({
    id: PropTypes.number,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

BannerInput.defaultProps = {
  banner: null,
};

export default BannerInput;
