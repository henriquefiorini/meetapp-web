import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Wrapper, Label, Image, Icon, Text, Input, Error } from './styles';

import { Api } from '~/services';

function ImageInput({ name, label, placeholder }) {
  const ref = useRef();

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: `${fieldName}_id`,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await Api.post('files', data);

    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Wrapper htmlFor={fieldName}>
      {label && <Label>{label}</Label>}
      <Image url={preview}>
        {!preview && (
          <>
            <Icon size={40} />
            <Text>{placeholder}</Text>
          </>
        )}
      </Image>
      <Input
        id={fieldName}
        type="file"
        accept="image/*"
        ref={ref}
        data-file={file}
        onChange={handleChange}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

ImageInput.defaultProps = {
  label: null,
  placeholder: null,
};

export default ImageInput;
