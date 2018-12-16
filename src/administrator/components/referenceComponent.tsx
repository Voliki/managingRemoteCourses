import * as React from 'react';
import { Card, List, Button, Modal, Input } from 'semantic-ui-react';
import { categoryStateType } from '../../store/adminState';
import { connect } from 'react-redux';
import { initialStateType } from '../../store/initialState';
import { categoryAction } from '../action/categoryAction';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

type Props = {
  category: categoryStateType;

  showModalCategory: (isShow: boolean) => (dispatch: any) => void;
  addNewCategory: () => (dispatch: any) => void;
  saveCategory: () => (dispatch: any) => void;
  changeNameCategory: (name: string) => (dispatch: any) => void;
  cancelSaveCategory: () => (dispatch: any) => void;
  deleteCategory: (idCategory: string) => (dispatch: any) => void;
  editCategory: (idCategory: string) => (dispatch: any) => void;
};
type State = {};

export class ReferenceComponent extends React.Component<Props, State> {
  addNewCategory = () => {
    this.props.addNewCategory();
  };
  showModal = () => {
    this.props.showModalCategory(true);
  };
  cancelSaveCategory = () => {
    this.props.cancelSaveCategory();
  };
  changeCategory = (e: any) => {
    this.props.changeNameCategory(e.target.value);
  };
  saveCategory = () => {
    this.props.saveCategory();
  };
  deleteCategoryes = (idCategory: string) => {
    this.props.deleteCategory(idCategory);
  };
  editCategory = (idCategory: string) => {
    this.props.editCategory(idCategory);
  };

  _renderCategorys = () => {
    return this.props.category.listCategory.map(item => {
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
            <span>Катигории курса</span>
            <Button
              onClick={this.addNewCategory}
            >
              Добавить категорию
            </Button>
          </Card.Content>
          <Card.Content>
            <List divided={true}>
              {this._renderCategorys()}
            </List>
          </Card.Content>
        </Card>
        <Modal open={this.props.category.isShowModalCategory}>
          <Modal.Header>
            Категория
          </Modal.Header>
          <Modal.Content>
            <Input
              value={this.props.category.selectCategory.name}
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
    category: state.admin.category,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      ...categoryAction,
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ReferenceComponent));