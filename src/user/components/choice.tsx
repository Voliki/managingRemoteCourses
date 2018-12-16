import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { initialStateType } from '../../store/initialState';
import {
  addNewListener, cancelAddNewListener, changeField, changeFieldUr, changeFieldUrListener,
  changeOpenAndCloseFormListener, deleteListener,
  editProfileListener,
  saveListener,
  switchingBetweenForms
} from '../action/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FizForm } from '../components/fizForm';
import { UrForm } from './urForm';
import { loginFormUrl } from '../../constants/routeUrls';

type Props = {
  state: initialStateType;

  switchingBetweenForms: (typeForm: string) => (dispatch: any) => void;
  changeField: (field: string, value: any) => (dispatch: any) => void;
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

class Choice extends React.Component<Props, State> {
  _handleFizFace = () => {
    this.props.switchingBetweenForms('fiz');
  };
  _handleUrFace = () => {
    this.props.switchingBetweenForms('ur');
  };

  render() {
    return (
      <React.Fragment>
        <div className="choice-container">
          <div style={{maxWidth: '1200px'}}>
            <div className="choice-header-container">
              <p className="choice-p">Заявка на обучение!</p>
              заполните анкету слушателя
            </div>
            <div>
              <Link to={loginFormUrl}>Администрирование</Link>
            </div>
            <div className="choice-image-container">
              <img src="/assets/images/up.png"/>
            </div>
            <div className="choice-button-container">
              <Button
                primary={this.props.state.settings.typeForm === 'fiz'}
                style={{width: '40%'}}
                onClick={this._handleFizFace}
              >
                Физическое лицо
              </Button>
              <Button
                primary={this.props.state.settings.typeForm === 'ur'}
                style={{width: '40%'}}
                onClick={this._handleUrFace}
              >
                Юридическое лицо
              </Button>
            </div>
          </div>
        </div>
        {/*<div>*/}
        {this.props.state.settings.typeForm === 'fiz' &&
        (
          <FizForm
            formField={this.props.state.fizFace}

            changeField={this.props.changeField}
          />
        )}
        {this.props.state.settings.typeForm === 'ur' &&
        (
          <UrForm
            settings={this.props.state.settings}
            urFace={this.props.state.urFace}

            addNewListener={this.props.addNewListener}
            changeOpenAndCloseFormListener={this.props.changeOpenAndCloseFormListener}
            changeFieldUr={this.props.changeFieldUr}
            saveListener={this.props.saveListener}
            deleteListener={this.props.deleteListener}
            editProfileListener={this.props.editProfileListener}
            changeFieldUrListener={this.props.changeFieldUrListener}
            cancelAddNewListener={this.props.cancelAddNewListener}
          />
        )}
        {/*</div>*/}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: initialStateType) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      switchingBetweenForms,
      changeField,
      addNewListener,
      changeOpenAndCloseFormListener,
      changeFieldUr,
      saveListener,
      deleteListener,
      editProfileListener,
      changeFieldUrListener,
      cancelAddNewListener,
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Choice));