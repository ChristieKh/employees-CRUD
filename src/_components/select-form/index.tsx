import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { FormControl, Select } from '@material-ui/core';
import { FieldRenderProps } from 'react-final-form';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const COMPONENT_STYLE_NAME = 'Select-form';

type Props = FieldRenderProps<string, HTMLInputElement>;

export const SelectForm = memo(
  ({ input: { onChange, value }, options, id }: Props) => (
    <FormControl variant="outlined" className={cn(COMPONENT_STYLE_NAME)}>
      <label htmlFor={id}>Должность</label>
      <Select
        native
        value={value}
        onChange={onChange}
        inputProps={{ id }}
        className={cn(`${COMPONENT_STYLE_NAME}__input`)}
      >
        {options.map(({ id: idOption, text }: { id: number; text: string }) => (
          <option value={idOption} key={idOption}>
            {text}
          </option>
        ))}
      </Select>
    </FormControl>
  ),
);
