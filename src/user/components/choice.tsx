import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { initialStateType } from '../../store/initialState';
import {
  addNewListener, changeField, changeFieldUr, changeOpenAndCloseFormListener, saveListener,
  switchingBetweenForms
} from '../action/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FizForm } from '../components/fizForm';
import { UrForm } from './urForm';
import { ListenerType } from '../../store/urFaceState';

type Props = {
  state: initialStateType;

  switchingBetweenForms: (typeForm: string) => (dispatch: any) => void;
  changeField: (field: string, value: any) => (dispatch: any) => void;
  addNewListener: () => (dispatch: any) => void;
  changeOpenAndCloseFormListener: (isShow: boolean) => (dispatch: any) => void;
  changeFieldUr: (field: string, value: any) => (dispatch: any) => void;
  saveListener: (listener: ListenerType) => (dispatch: any) => void;
};
type State = {};

const containerStyle: any = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // maxWidth: '1200px',
};
const headerStyle: any = {
  textAlign: 'center',
  position: 'relative',
  marginBottom: '5px',
  background: '#0071bb',
  marginLeft: '-10px',
  padding: '5px',
  color: '#fff',
  width: '100%',
};
const pStyle: any = {
  fontSize: '18px',
  position: 'relative',
  marginBottom: '-5px',
};

const imageContainerStyle: any = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const buttonContainerStyle: any = {
  display: 'flex',
  justifyContent: 'center',
  width: '1000px',
};

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
        <div style={containerStyle}>
          <div style={{maxWidth: '1200px'}}>
            <div style={headerStyle}>
              <p style={pStyle}>Заявка на обучение!</p>
              заполните анкету слушателя
            </div>
            <div style={imageContainerStyle}>
              <img src="/assets/images/up.png"/>
            </div>
            <div style={buttonContainerStyle}>
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
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Choice));