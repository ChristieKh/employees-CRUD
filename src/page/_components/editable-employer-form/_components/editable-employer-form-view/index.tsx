import React, { memo } from 'react';
import { Form, Field } from 'react-final-form';
import classnames from 'classnames/bind';
import { Button } from '../../../../../_components/button';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const STYLE_NAME = 'Editable-employer-form-view';

type PropsType = {
  handleAddNewEmployer: () => void;
  handleDeleteEmployer: () => void;
  onSubmit: (values: any) => void;
};

export const EditableEmployerFormView = memo(
  ({ handleAddNewEmployer, handleDeleteEmployer, onSubmit }: PropsType) => (
    <div className={cn(STYLE_NAME)}>
      <div className={cn(`${STYLE_NAME}__buttons`)}>
        <Button
          type="button"
          text="Добавить нового сотрудника"
          handleClick={handleAddNewEmployer}
        />
        <Button
          type="button"
          text="Удалить сотрудника"
          handleClick={handleDeleteEmployer}
        />
      </div>
      <Form
        onSubmit={onSubmit}
        // validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>ФИО</label>
              <Field name="person" component="input" placeholder="ФИО" />
            </div>
            <div>
              <label>Должность</label>
              <Field name="work" component="select">
                <option value="#ff0000">Разработчик</option>
                <option value="#00ff00">Дизайнер</option>
                <option value="#0000ff">Аналитик</option>
                <option value="#0000ff">Тестировщик</option>
              </Field>
            </div>

            <div>
              <label>Пол</label>
              <label>
                <Field name="gender" component="input" type="radio" value="m" />
                мужской
              </label>
              <label>
                <Field name="gender" component="input" type="radio" value="w" />
                женский
              </label>
            </div>

            <div>
              <label>
                Уволен
                <Field
                  name="employ"
                  component="input"
                  type="checkbox"
                  value="guacamole"
                />{' '}
              </label>
            </div>

            <Button text="Сохранить изменения" type="submit" />
          </form>
        )}
      />
    </div>
  ),
);