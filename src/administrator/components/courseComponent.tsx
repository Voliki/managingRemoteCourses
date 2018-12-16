import * as React from 'react';
import { Card, List, Button, Modal, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialStateType } from '../../store/initialState';
import { withRouter } from 'react-router-dom';
import { courseAction } from '../action/courseAction';
import { courseStateType } from '../../store/adminState';

type Props = {
  course: courseStateType;

  addNewCourse: () => (dispatch: any) => void;
  saveCourse: () => (dispatch: any) => void;
  cancelSaveCourse: () => (dispatch: any) => void;
  changeNameCourse: (name: string) => (dispatch: any) => void;
  editCourse: (idCourse: string) => (dispatch: any) => void;
  deleteCourse: (idCourse: string) => (dispatch: any) => void;
  showModalCourse: (isShow: boolean) => (dispatch: any) => void;
};
type State = {};

class CourseComponent extends React.Component<Props, State> {
  addNewCategory = () => {
    this.props.addNewCourse();
  };
  cancelSaveCategory = () => {
    this.props.cancelSaveCourse();
  };
  changeCategory = (e: any) => {
    this.props.changeNameCourse(e.target.value);
  };
  saveCategory = () => {
    this.props.saveCourse();
  };
  deleteCategoryes = (idCategory: string) => {
    this.props.deleteCourse(idCategory);
  };
  editCategory = (idCategory: string) => {
    this.props.editCourse(idCategory);
  };

  _renderCategorys = () => {
    return this.props.course.listCourse.map(item => {
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
        <Modal open={this.props.course.isShowModalCourse}>
          <Modal.Header>
            Категория
          </Modal.Header>
          <Modal.Content>
            <Input
              value={this.props.course.selectCourse.name}
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
    course: state.admin.course,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      ...courseAction,
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(CourseComponent));