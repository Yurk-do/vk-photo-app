import React, { FC } from 'react';
import { Field } from 'react-final-form';

type FieldInputPropsType = {
  fieldName: string;
  validators: () => string | undefined;
  fieldTitle: string;
  inputHandler: () => void;
  fieldType: string;
};

const FieldInput: FC<FieldInputPropsType> = ({
  fieldName,
  validators,
  fieldTitle,
  inputHandler,
  fieldType,
}) => {
  return (
    <Field name={fieldName} validate={validators}>
      {({ input, meta }) => (
        <div>
          <label>{fieldTitle}</label>
          <input
            {...input}
            type={fieldType}
            placeholder={fieldTitle}
            onInput={inputHandler}
          />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};

export default FieldInput;
