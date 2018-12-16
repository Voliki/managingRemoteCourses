import * as React from 'react';
import ReferenceComponent from './referenceComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialStateType } from '../../store/initialState';
import { withRouter } from 'react-router-dom';
import { categoryAction } from '../action/categoryAction';
import FormStudyComponent from './formStudyComponent';
import CourseComponent from './courseComponent';
import { TableRecords } from './tableRecords';

type Props = {
  state: initialStateType;
};
type State = {};

export class Administrator extends React.Component<Props, State> {
  render() {
    return (
      <div className="administrator-form-container">
        <div className="administrator-course-container">
          <ReferenceComponent/>
          <FormStudyComponent/>
          <CourseComponent/>
        </div>
        <div>
          <TableRecords/>
        </div>
      </div>
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
      ...categoryAction,
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Administrator));