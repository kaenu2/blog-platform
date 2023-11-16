import React from 'react';

import InputLabel from '../input-label/input-label';
import Input from '../input/input';
import ErrorMessage from '../error-message/error-message';

import { TProps } from './input-item.types';

const InputItem: React.FC<TProps> = ({ title, hasError, type, placeholder, field, refName, options, element }) => {
  return (
    <InputLabel title={title}>
      <>
        <Input
          hasError={hasError}
          type={type}
          placeholder={placeholder}
          field={field}
          refName={refName}
          options={options}
          element={element}
        />
        <ErrorMessage hasError={hasError} />
      </>
    </InputLabel>
  );
};

export default InputItem;
