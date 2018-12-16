import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Card, List, Button, Modal, Input } from 'semantic-ui-react';

import { initialStateType } from '../../store/initialState';
import { formStudyAction } from '../action/formStudyAction';
import { formStudyStateType } from '../../store/adminState';

type Props = {
  formStudy: formStudyStateType;

  addNewFormStudy: () => (dispatch: any) => void;
  saveFormStudy: () => (dispatch: any) => void;
  cancelSaveFormStudy: () => (dispatch: any) => void;
  changeNameFormStudy: (name: string) => (dispatch: any) => void;
  editFormStudy: (idFormStudy: string) => (dispatch: any) => void;
  deleteFormStudy: (idFormStudy: string) => (dispatch: any) => void;
};
type State = {};

class FormStudyComponent extends React.Component<Props, State> {
  addNewCategory = () => {
    this.props.addNewFormStudy();
  };
  cancelSaveCategory = () => {
    this.props.cancelSaveFormStudy();
  };
  changeCategory = (e: any) => {
    this.props.changeNameFormStudy(e.target.value);
  };
  saveCategory = () => {
    this.props.saveFormStudy();
  };
  deleteCategoryes = (idCategory: string) => {
    this.props.deleteFormStudy(idCategory);
  };
  editCategory = (idCategory: string) => {
    this.props.editFormStudy(idCategory);
  };

  _renderCategorys = () => {
    return this.props.formStudy.listFormStudy.map(item => {
      return (
        <List.Item key={item.id}>
          <div className="reference-card-category-list-item-container">
            <div>
              {item.name}
            </div>
            <div>
              <Button
                positive={true}
                onClick={() => {
                  this.editCategory(item.id);
                }}
              >
                Ред
              </Button>
              <Button
                negative={true}
                onClick={() => {
                  this.deleteCategoryes(item.id);
                }}
              >
                Удалить
              </Button>
            </div>
          </div>
        </List.Item>
      );
    });
  };

  render() {
    return (
      <div className="reference-card-category-container">
        <Card className="reference-card-category">
          <Card.Content className="reference-card-category-header">
            <span>Формы обучения</span>
            <Button
              onClick={this.addNewCategory}
            >
              Добавить форму обучения
            </Button>
          </Card.Content>
          <Card.Content>
            <List divided={true}>
              {this._renderCategorys()}
            </List>
          </Card.Content>
        </Card>
        <Modal open={this.props.formStudy.isShowModalFormStudy}>
          <Modal.Header>
            Форма обучения
          </Modal.Header>
          <Modal.Content>
            <Input
              value={this.props.formStudy.selectFormStudy.name}
              onChange={this.changeCategory}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive={true}
              onClick={this.saveCategory}
            >
              Сохранить
            </Button>
            <Button
              negative={true}
              onClick={this.cancelSaveCategory}
            >
              Отменить
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: initialStateType) => {
  return {
    formStudy: state.admin.formStudy,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      ...formStudyAction,
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(FormStudyComponent));