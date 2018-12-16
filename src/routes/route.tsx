import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { initialStateType } from '../store/initialState';
import { administratorUrl, baseUrl, loginFormUrl } from '../constants/routeUrls';
import Choice from '../user/components/choice';
import { LoginForm } from '../administrator/components/loginForm';
import Administrator from '../administrator/components/administrator';

type Props = {};
type State = {};

class Routes extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <Switch>
          <Route exact={true} path={baseUrl} component={Choice}/>
          <Route exact={true} path={loginFormUrl} component={LoginForm}/>
          <Route exact={true} path={administratorUrl} component={Administrator}/>
          {/*<Route exact={true} path={fizFaceFormUrl} component={FizForm}/>*/}
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: initialStateType) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {},
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Routes));
