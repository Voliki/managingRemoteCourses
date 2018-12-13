import * as React from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { FieldInput, FieldMaskInput, FieldSelect } from './field';
import { toast } from 'react-toastify';
import { UrFormListener } from './urFormListener';
import { settingsStateType } from '../../store/settingsState';
import { RecordsByNewUrListener } from './recordsByNewUrListener';
import { ListenerType, UrFaceStateType } from '../../store/urFaceState';

type Props = {
  settings: settingsStateType;
  urFace: UrFaceStateType;

  addNewListener: () => (dispatch: any) => void;
  changeOpenAndCloseFormListener: (isShow: boolean) => (dispatch: any) => void;
  changeFieldUr: (field: string, value: any) => (dispatch: any) => void;
  saveListener: (listener: ListenerType) => (dispatch: any) => void;
};
type State = {
};

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
    // this.props.changeField(data.name, data.value);
  };
  onChangeInput = (e: any) => {
    this.props.changeFieldUr(e.target.name, e.target.value);
    // this.props.changeField(e.target.name, e.target.value);
  };
  onChangeFile = (e: any) => {
    const sizeFile: number = 500000;
    if (e.target.files[0].size > sizeFile) {
      e.target.value = '';
      toast.error('Изображение превышает допустимый размер 500кб', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      // this.props.changeField(e.target.name, e.target.files[0]);
    }
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
              // disabled={!!!this.props.formField.courseCategory}
              disabled={false}
              options={this.testOptions()}
              onChangeSelect={this.onChangeSelect}
            />
            <FieldSelect
              label="Выберите Курс"
              placeholder="Курс"
              name="course"
              // disabled={!!!this.props.formField.formStudy}
              disabled={false}
              options={this.testOptions()}
              onChangeSelect={this.onChangeSelect}
            />
            <FieldInput
              label="Наименование юридического лица"
              name="nameUrFace"
              placeholder="Наименование юридического лица"
              value={this.onChangeInput}
              onChangeInput={this.onChangeInput}
            />
            <FieldMaskInput
              label="ИНН юридического лица"
              name="TINUr"
              placeholder="999999999999"
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
              onChangeInput={this.onChangeInput}
            />
            <FieldInput
              label="Реквизиты юридического лица"
              name="requisites"
              placeholder="Реквизиты"
              // value={this.props.formField.firstName}
              onChangeInput={this.onChangeInput}
            />
            <FieldInput
              label="ФИО представителя юридического лица"
              name="nameRepresentativeLegalEntity"
              placeholder="ФИО представителя"
              // value={this.props.formField.firstName}
              onChangeInput={this.onChangeInput}
            />
            <FieldInput
              label="Электронная почта представителя юридического лица"
              name="emailUr"
              placeholder="Электронная почта юридического лица"
              // value={this.props.formField.firstName}
              onChangeInput={this.onChangeInput}
            />
            <RecordsByNewUrListener
              urFace={this.props.urFace}
            />
            <Button
              primary={true}
              onClick={this.addListener}
            >
              Добавить слушателя
            </Button>
          </Form>
          {/*<Modal open={this.props.settings.isShowModalFormListener}>*/}
          {/*<Modal.Header>Введите данные слушателя</Modal.Header>*/}
          {/*<Modal.Content>*/}
          {/*<div className="ur-form-listener">*/}
          <UrFormListener
            settings={this.props.settings}

            saveListener={this.props.saveListener}
            changeOpenAndCloseFormListener={this.props.changeOpenAndCloseFormListener}
          />
          {/*</div>*/}
          {/*</Modal.Content>*/}
          {/*<Modal.Actions>*/}
          {/*<Button*/}
          {/*positive={true}*/}
          {/*onClick={this.saveNewListener}*/}
          {/*>*/}
          {/*Сохранить слушателя*/}
          {/*</Button>*/}
          {/*<Button*/}
          {/*negative={true}*/}
          {/*onClick={this.cancelNewListener}*/}
          {/*>*/}
          {/*Отменить*/}
          {/*</Button>*/}
          {/*</Modal.Actions>*/}
          {/*</Modal>*/}
        </div>
      </React.Fragment>
    );
  }
}