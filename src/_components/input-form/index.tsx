import React, { memo } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Input } from '../input';

type Props = FieldRenderProps<string, HTMLInputElement>;

export const InputForm = memo(({ input, id }: Props) => (
  <>
    <label htmlFor={id}>Имя сотрудника</label>
    <Input input={input} id={id} />
  </>
));
