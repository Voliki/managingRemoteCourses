import { v4 as uuidV4 } from 'uuid';
import {
  formStudyStateType, category, categoryType, formStudyState
} from '../../store/adminState';

export function formStudyReducer(state: formStudyStateType = formStudyState, action: any) {
  const reduceObject: any = {
    // ['SHOW_MODAL_FORM_STUDY']: showCategory,
    ['ADD_NEW_FORM_STUDY']: addNewCategory,
    ['CHANGE_NAME_FORM_STUDY']: changeNameCategory,
    ['SAVE_FORM_STUDY']: saveCategory,
    ['CANCEL_SAVE_FORM_STUDY']: cancelSaveCategory,
    ['DELETE_FORM_STUDY']: deleteCategory,
    ['EDIT_FORM_STUDY']: editCategory,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

function showCategory(state: formStudyStateType, action: any): formStudyStateType {
  return {
    ...state,
    isShowModalFormStudy: action.isShow,
  };
}

function addNewCategory(state: formStudyStateType, action: any): formStudyStateType {
  return {
    ...state,
    isShowModalFormStudy: true,
    selectFormStudy: {
      ...category,
      id: uuidV4(),
    },
  };
}

function changeNameCategory(state: formStudyStateType, action: any): formStudyStateType {
  return {
    ...state,
    selectFormStudy: {
      ...state.selectFormStudy,
      name: action.name,
    },
  };
}

function saveCategory(state: formStudyStateType, action: any): formStudyStateType {
  const categorys: categoryType = state.listFormStudy.find(item => item.id === state.selectFormStudy.id);
  let categoryes: Array<categoryType> = [];
  if (!!categorys) {
    categoryes = state.listFormStudy.map(item => {
      if (item.id === state.selectFormStudy.id) {
        return state.selectFormStudy;
      } else {
        return item;
      }
    });
  } else {
    if (state.listFormStudy.length > 0) {
      categoryes = [
        ...state.listFormStudy,
        state.selectFormStudy
      ];
    } else {
      categoryes = [
        state.selectFormStudy
      ];
    }
  }
  return {
    ...state,
    listFormStudy: [
      ...categoryes
    ],
    isShowModalFormStudy: false,
  };
}

function cancelSaveCategory(state: formStudyStateType, action: any): formStudyStateType {
  return {
    ...state,
    selectFormStudy: category,
    isShowModalFormStudy: false,
  };
}

function deleteCategory(state: formStudyStateType, action: any): formStudyStateType {
  return {
    ...state,
    listFormStudy: [
      ...state.listFormStudy.filter(item => item.id !== action.idFormStudy)
    ],
  };
}

function editCategory(state: formStudyStateType, action: any): formStudyStateType {
  return {
    ...state,
    selectFormStudy: state.listFormStudy.find(item => item.id === action.idFormStudy),
    isShowModalFormStudy: true,
  };
}
