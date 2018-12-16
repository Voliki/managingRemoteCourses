import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { FieldInput, FieldMaskInput, FieldSelect } from './field';
import { UrFormListener } from './urFormListener';
import { settingsStateType } from '../../store/settingsState';
import { RecordsByNewUrListener } from './recordsByNewUrListener';
import { UrFaceStateType } from '../../store/urFaceState';

type Props = {
  settings: settingsStateType;
  urFace: UrFaceStateType;

  addNewListener: () => (dispatch: any) => void;
  changeOpenAndCloseFormListener: (isShow: boolean) => (dispatch: any) => void;
  changeFieldUr: (field: string, value: any) => (dispatch: any) => void;
  saveListener: () => (dispatch: any) => void;
  deleteListener: (listenerId: string) => (dispatch: any) => void;
  editProfileListener: (listenerId: string) => (dispatch: any) => void;
  changeFieldUrListener: (field: string, value: any) => (dispatch: any) => void;
  cancelAddNewListener: () => (dispatch: any) => void;
};
type State = {};

export class UrForm extends React.Component<Props, State> {
  testOptions = () => {
    return [
      {
        value: 'dfsfd',
        text: 'fsdfsdkmf',
      }
    ];
  };
  onChangeSelect = (e: any, data: any) => {
    this.props.changeFieldUr(data.name, data.value);
  };
  onChangeInput = (e: any) => {
    this.props.changeFieldUr(e.target.name, e.target.value);
  };
  addListener = () => {
    this.props.addNewListener();
  };

  render() {
    return (
      <React.Fragment>
        <div className="ur-form-container">
          <Form className="ur-form">
            <FieldSelect
              label="Выбор категории курса"
              placeholder="Категория курса"
              name="courseCategory"
              disabled={false}
              options={this.testOptions()}
              onChangeSelect={this.onChangeSelect}
            />
            <FieldSelect
              label="Выберите форму обучения"
              placeholder="Форма обучения"
              name="formStudy"
              disabled={!!!this.props.urFace.courseCategory}
              options={this.testOptions()}
              onChangeSelect={this.onChangeSelect}
            />
            <FieldSelect
              label="Выберите Курс"
              placeholder="Курс"
              name="course"
              disabled={!!!this.props.urFace.formStudy}
              options={this.testOptions()}
              onChangeSelect={this.onChangeSelect}
            />
            <FieldInput
              label="Наименование юридического лица"
              name="nameUrFace"
              placeholder="Наименование юридического лица"
              value={this.props.urFace.nameUrFace}
              onChangeInput={this.onChangeInput}
            />
            <FieldMaskInput
              label="ИНН юридического лица"
              name="TINUr"
              placeholder="999999999999"
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
              value={this.props.urFace.TINUr}
              onChangeInput={this.onChangeInput}
            />
            <FieldInput
              label="Реквизиты юридического лица"
              name="requisites"
              placeholder="Реквизиты"
              value={this.props.urFace.requisites}
              onChangeInput={this.onChangeInput}
            />
            <FieldInput
              label="ФИО представителя юридического лица"
              name="nameRepresentativeLegalEntity"
              placeholder="ФИО представителя"
              value={this.props.urFace.nameRepresentativeLegalEntity}
              onChangeInput={this.onChangeInput}
            />
            <FieldInput
              label="Электронная почта представителя юридического лица"
              name="emailUr"
              placeholder="Электронная почта юридического лица"
              value={this.props.urFace.emailUr}
              onChangeInput={this.onChangeInput}
            />
            <RecordsByNewUrListener
              urFace={this.props.urFace}

              deleteListener={this.props.deleteListener}
              editProfileListener={this.props.editProfileListener}
            />
            <Button
              primary={true}
              onClick={this.addListener}
            >
              Добавить слушателя
            </Button>
          </Form>
          {this.props.settings.isShowModalFormListener &&
          <UrFormListener
            settings={this.props.settings}
            urFace={this.props.urFace}

            saveListener={this.props.saveListener}
            changeOpenAndCloseFormListener={this.props.changeOpenAndCloseFormListener}
            changeFieldUrListener={this.props.changeFieldUrListener}
            cancelAddNewListener={this.props.cancelAddNewListener}
          />
          }
        </div>
      </React.Fragment>
    );
  }
}