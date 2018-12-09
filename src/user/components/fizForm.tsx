import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { toast } from 'react-toastify';

import { FieldFileLoader, FieldInput, FieldMaskInput, FieldSelect } from './field';
import { fizFaceStateType } from '../../store/fizFaceState';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  // fizFace: fizFaceStateType;
  formField: fizFaceStateType,

  changeField: (field: string, value: any) => (dispatch: any) => void;
};
type State = {};

export class FizForm extends React.Component<Props, State> {
  testOptions = () => {
    return [
      {
        value: 'dfsfd',
        text: 'fsdfsdkmf',
      }
    ];
  };

  onChangeSelect = (e: any, data: any) => {
    this.props.changeField(data.name, data.value);
  };
  onChangeInput = (e: any) => {
    this.props.changeField(e.target.name, e.target.value);
  };
  onChangeFile = (e: any) => {
    const sizeFile: number = 500000;
    if (e.target.files[0].size > sizeFile) {
      e.target.value = '';
      toast.error('Изображение превышает допустимый размер 500кб', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      this.props.changeField(e.target.name, e.target.files[0]);
    }
  };

  render() {
    return (
      <div className="fiz-form-container">
        <Form className="fiz-form">
          <FieldSelect
            label="Выбор категории курса"
            placeholder="Категория курса"
            name="courseСategory"
            disabled={false}
            options={this.testOptions()}
            onChangeSelect={this.onChangeSelect}
          />
          <FieldSelect
            label="Выберите форму обучения"
            placeholder="Форма обучения"
            name="formStudy"
            disabled={!!!this.props.formField.courseCategory}
            options={this.testOptions()}
            onChangeSelect={this.onChangeSelect}
          />
          <FieldSelect
            label="Выберите Курс"
            placeholder="Курс"
            name="course"
            disabled={!!!this.props.formField.formStudy}
            options={this.testOptions()}
            onChangeSelect={this.onChangeSelect}
          />
          <FieldInput
            label="Фамилия слушателя"
            name="firstName"
            placeholder="Введите фамилию"
            value={this.props.formField.firstName}
            onChangeInput={this.onChangeInput}
          />
          <FieldInput
            label="Имя"
            name="name"
            placeholder="Введите имя"
            onChangeInput={this.onChangeInput}
          />
          <FieldInput
            label="Отчество"
            name="patronymic"
            placeholder="Введите отчество"
            onChangeInput={this.onChangeInput}
          />
          <FieldInput
            label="Адрес электронной почты"
            name="email"
            placeholder="Введите адрес электронной почты"
            onChangeInput={this.onChangeInput}
          />
          <FieldSelect
            label="Образование"
            placeholder="Выберите образование"
            name="education"
            disabled={false}
            options={this.testOptions()}
            onChangeSelect={this.onChangeSelect}
          />
          <FieldFileLoader
            label="Документ об образовании"
            name="educationDocument"
            value={this.props.formField.educationDocument}
            onChangeFile={this.onChangeFile}
          />
          <FieldFileLoader
            label="Документ удостоверяющий личность"
            name="identificationDocument"
            value={this.props.formField.identificationDocument}
            onChangeFile={this.onChangeFile}
          />
          <FieldFileLoader
            label="Документ об изменении фамилии"
            name="documentChangingName"
            value={this.props.formField.documentChangingName}
            onChangeFile={this.onChangeFile}
          />
          <FieldFileLoader
            label="Прочий документ слушателя"
            name="otherDocumentListener"
            value={this.props.formField.otherDocumentListener}
            onChangeFile={this.onChangeFile}
          />
          <FieldMaskInput
            label="СНИЛС"
            name="SNILS"
            placeholder="***-***-***-**"
            mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            onChangeInput={this.onChangeInput}
          />
          <FieldMaskInput
            label="ИНН слушателя"
            name="TINListener"
            placeholder="999999999999"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
            onChangeInput={this.onChangeInput}
          />
          <FieldInput
            label="Место работы"
            name="placeWork"
            placeholder="Введите место работы"
            onChangeInput={this.onChangeInput}
          />
          <FieldInput
            label="Должность"
            name="position"
            placeholder="Введите должность"
            onChangeInput={this.onChangeInput}
          />
          <FieldMaskInput
            label="Почтовый индекс МЖ слушателя"
            name="postcodeMFListener"
            placeholder="999999"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
            onChangeInput={this.onChangeInput}
          />
          <FieldInput
            label="Адрес МЖ слушателя"
            name="addressMFListener"
            placeholder="Введите адрес МЖ слушателя"
            onChangeInput={this.onChangeInput}
          />
          <FieldInput
            label="Контактный телефон слушателя"
            name="contactPhoneListener"
            placeholder="Введите контактный телефон слушателя"
            onChangeInput={this.onChangeInput}
          />
        </Form>
      </div>
    );
  }
}
