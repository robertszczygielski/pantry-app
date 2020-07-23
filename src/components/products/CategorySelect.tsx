import React from 'react';
import { useField } from 'formik';

interface ICategorySelect {
  label: string;
  name: string;
}

export const CategorySelect: React.FC<ICategorySelect> = ({
  label,
  name,
  ...props
}) => {
  const [field, meta] = useField('category');
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
