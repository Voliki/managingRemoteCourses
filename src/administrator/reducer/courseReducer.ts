import { v4 as uuidV4 } from 'uuid';
import {
  courseStateType, category, courseState, categoryType
} from '../../store/adminState';

export function courseReducer(state: courseStateType = courseState, action: any) {
  const reduceObject: any = {
    ['SHOW_MODAL_COURSE']: showcourse,
    ['ADD_NEW_COURSE']: addNewcourse,
    ['CHANGE_NAME_COURSE']: changeNamecourse,
    ['SAVE_COURSE']: savecourse,
    ['CANCEL_SAVE_COURSE']: cancelSavecourse,
    ['DELETE_COURSE']: deletecourse,
    ['EDIT_COURSE']: editcourse,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

function showcourse(state: courseStateType, action: any): courseStateType {
  return {
    ...state,
    isShowModalCourse: action.isShow,
  };
}

function addNewcourse(state: courseStateType, action: any): courseStateType {
  return {
    ...state,
    isShowModalCourse: true,
    selectCourse: {
      ...category,
      id: uuidV4(),
    },
  };
}

function changeNamecourse(state: courseStateType, action: any): courseStateType {
  return {
    ...state,
    selectCourse: {
      ...state.selectCourse,
      name: action.name,
    },
  };
}

function savecourse(state: courseStateType, action: any): courseStateType {
  const courses: categoryType = state.listCourse.find(item => item.id === state.selectCourse.id);
  let coursees: Array<categoryType> = [];
  if (!!courses) {
    coursees = state.listCourse.map(item => {
      if (item.id === state.selectCourse.id) {
        return state.selectCourse;
      } else {
        return item;
      }
    });
  } else {
    if (state.listCourse.length > 0) {
      coursees = [
        ...state.listCourse,
        state.selectCourse
      ];
    } else {
      coursees = [
        state.selectCourse
      ];
    }
  }
  return {
    ...state,
    listCourse: [
      ...coursees
    ],
    isShowModalCourse: false,
  };
}

function cancelSavecourse(state: courseStateType, action: any): courseStateType {
  return {
    ...state,
    selectCourse: category,
    isShowModalCourse: false,
  };
}

function deletecourse(state: courseStateType, action: any): courseStateType {
  return {
    ...state,
    listCourse: [
      ...state.listCourse.filter(item => item.id !== action.idCourse)
    ],
  };
}

function editcourse(state: courseStateType, action: any): courseStateType {
  return {
    ...state,
    selectCourse: state.listCourse.find(item => item.id === action.idCourse),
    isShowModalCourse: true,
  };
}
