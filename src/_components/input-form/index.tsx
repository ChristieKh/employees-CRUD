import React, { memo } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Input } from '../input';

type Props = FieldRenderProps<string, HTMLInputElement>;

export const InputForm = memo(({ input, id, label }: Props) => (
  <>
    <label htmlFor={id}>{label}</label>
    <Input input={input} id={id} />
  </>
));
