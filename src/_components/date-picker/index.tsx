import React, { memo, useCallback } from 'react';
import 'react-day-picker/lib/style.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils from 'react-day-picker/moment';
import './index.module.scss';
import { FieldRenderProps } from 'react-final-form';

type Props = FieldRenderProps<string, HTMLInputElement>;

export const DatePicker = memo(
  ({ input: { onChange, value }, label }: Props) => {
    const onChangeDateValue = useCallback((day: Date) => onChange(day), [
      onChange,
    ]);

    return (
      <>
        <p>{label}</p>
        <DayPickerInput
          onDayChange={onChangeDateValue}
          showOverlay
          format="DD.MM.YYYY"
          formatDate={MomentLocaleUtils.formatDate}
          parseDate={MomentLocaleUtils.parseDate}
          placeholder="_ _._ _._ _ _ _"
          value={value}
        />
      </>
    );
  },
);
