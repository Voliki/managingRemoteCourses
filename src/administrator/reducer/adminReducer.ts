import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { formStudyReducer } from './formStudyReducer';
import { courseReducer } from './courseReducer';

export const adminReducer: any = combineReducers({
  category: categoryReducer,
  formStudy: formStudyReducer,
  course: courseReducer,
});
