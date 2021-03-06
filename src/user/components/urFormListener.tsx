import * as React from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { v4 as uuidV4 } from 'uuid';

import { FieldFileLoader, FieldInput, FieldMaskInput, FieldSelect } from './field';
import { toast } from 'react-toastify';
import { defaultUrListener, ListenerType, UrFaceStateType } from '../../store/urFaceState';
import { settingsStateType } from '../../store/settingsState';

type Props = {
  settings: settingsStateType;
  urFace: UrFaceStateType;

  saveListener: () => (dispatch: any) => void;
  changeOpenAndCloseFormListener: (isShow: boolean) => (dispatch: any) => void;
  changeFieldUrListener: (field: string, value: any) => (dispatch: any) => void;
  cancelAddNewListener: () => (dispatch: any) => void;
};
type State = {};

export class UrFormListener extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  testOptions = () => {
    return [
      {
        value: 'dfsfd',
        text: 'fsdfsdkmf',
      }
    ];
  };
  onChangeSelect = (e: any, data: any) => {
    this.props.changeFieldUrListener(data.name, data.value);
  };
  onChangeInput = (e: any) => {
    this.props.changeFieldUrListener(e.target.name, e.target.value);
  };
  saveNewListener = () => {
    this.props.saveListener();
  };
  cancelNewListener = () => {
    this.props.cancelAddNewListener();
  };
  onChangeFile = (e: any) => {
    const sizeFile: number = 500000;
    if (e.target.files[0].size > sizeFile) {
      e.target.value = '';
      toast.error('Изображение превышает допустимый размер 500кб', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      this.props.changeFieldUrListener(e.target.name, e.target.files[0]);
    }
  };

  render() {
    return (
      <Modal open={this.props.settings.isShowModalFormListener}>
        <Modal.Header>Введите данные слушателя</Modal.Header>
        <Modal.Content>
          <div className="ur-form-listener">
            <div>
              <Form>
                <FieldInput
                  label="Фамилия слушателя"
                  name="firstName"
                  placeholder="Введите фамилию"
                  value={this.props.urFace.selectListener.firstName}
                  onChangeInput={this.onChangeInput}
                />
                <FieldInput
                  label="Имя"
                  name="name"
                  placeholder="Введите имя"
                  value={this.props.urFace.selectListener.name}
                  onChangeInput={this.onChangeInput}
                />
                <FieldInput
                  label="Отчество"
                  name="patronymic"
                  placeholder="Введите отчество"
                  value={this.props.urFace.selectListener.patronymic}
                  onChangeInput={this.onChangeInput}
                />
                <FieldInput
                  label="Адрес электронной почты"
                  name="email"
                  placeholder="Введите адрес электронной почты"
                  value={this.props.urFace.selectListener.email}
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
                  // value={this.props.urFace.selectListener.educationDocument}
                  onChangeFile={this.onChangeFile}
                />
                <FieldFileLoader
                  label="Документ удостоверяющий личность"
                  name="identificationDocument"
                  // value={this.props.formField.identificationDocument}
                  onChangeFile={this.onChangeFile}
                />
                <FieldFileLoader
                  label="Документ об изменении фамилии"
                  name="documentChangingName"
                  // value={this.props.formField.documentChangingName}
                  onChangeFile={this.onChangeFile}
                />
                <FieldFileLoader
                  label="Прочий документ слушателя"
                  name="otherDocumentListener"
                  // value={this.props.formField.otherDocumentListener}
                  onChangeFile={this.onChangeFile}
                />
                <FieldInput
                  label="Должность слушателя"
                  name="position"
                  placeholder="Введите должность"
                  value={this.props.urFace.selectListener.position}
                  onChangeInput={this.onChangeInput}
                />
                <FieldMaskInput
                  label="СНИЛС"
                  name="SNILS"
                  placeholder="***-***-***-**"
                  mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                  value={this.props.urFace.selectListener.SNILS}
                  onChangeInput={this.onChangeInput}
                />
                <FieldMaskInput
                  label="ИНН слушателя"
                  name="TINListener"
                  placeholder="999999999999"
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                  value={this.props.urFace.selectListener.TINListener}
                  onChangeInput={this.onChangeInput}
                />
                <FieldMaskInput
                  label="Почтовый индекс МЖ слушателя"
                  name="postcodeMFListener"
                  placeholder="999999"
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                  value={this.props.urFace.selectListener.postcodeMFListener}
                  onChangeInput={this.onChangeInput}
                />
                <FieldInput
                  label="Адрес МЖ слушателя"
                  name="addressMFListener"
                  placeholder="Введите адрес МЖ слушателя"
                  value={this.props.urFace.selectListener.addressMFListener}
                  onChangeInput={this.onChangeInput}
                />
                <FieldInput
                  label="Контактный телефон слушателя"
                  name="contactPhoneListener"
                  placeholder="Введите контактный телефон слушателя"
                  value={this.props.urFace.selectListener.contactPhoneListener}
                  onChangeInput={this.onChangeInput}
                />
              </Form>
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            positive={true}
            onClick={this.saveNewListener}
          >
            Сохранить слушателя
          </Button>
          <Button
            negative={true}
            onClick={this.cancelNewListener}
          >
            Отменить
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}