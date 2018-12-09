import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router';

import { initialStateType } from '../store/initialState';
// import { changeField } from '../user/action/action';
import { baseUrl } from '../constants/routeUrls';
// import FizForm from '../user/components/fizForm';
import Choice from '../user/components/choice';
import { ToastContainer } from 'react-toastify';

type Props = {};
type State = {};

class Routes extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <Switch>
          <Route exact={true} path={baseUrl} component={Choice}/>
          {/*<Route exact={true} path={fizFaceFormUrl} component={FizForm}/>*/}
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: initialStateType) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Routes));
