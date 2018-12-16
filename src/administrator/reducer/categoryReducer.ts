import { v4 as uuidV4 } from 'uuid';
import {
  categoryStateType, category, categoryState, categoryType
} from '../../store/adminState';

export function categoryReducer(state: categoryStateType = categoryState, action: any) {
  const reduceObject: any = {
    ['SHOW_MODAL_CATEGORY']: showCategory,
    ['ADD_NEW_CATEGORY']: addNewCategory,
    ['CHANGE_NAME_CATEGORY']: changeNameCategory,
    ['SAVE_CATEGORY']: saveCategory,
    ['CANCEL_SAVE_CATEGORY']: cancelSaveCategory,
    ['DELETE_CATEGORY']: deleteCategory,
    ['EDIT_CATEGORY']: editCategory,
  };

  return reduceObject.hasOwnProperty(action.type) ? reduceObject[action.type](state, action) : state;
}

function showCategory(state: categoryStateType, action: any): categoryStateType {
  return {
    ...state,
    isShowModalCategory: action.isShow,
  };
}

function addNewCategory(state: categoryStateType, action: any): categoryStateType {
  return {
    ...state,
    isShowModalCategory: true,
    selectCategory: {
      ...category,
      id: uuidV4(),
    },
  };
}

function changeNameCategory(state: categoryStateType, action: any): categoryStateType {
  return {
    ...state,
    selectCategory: {
      ...state.selectCategory,
      name: action.name,
    },
  };
}

function saveCategory(state: categoryStateType, action: any): categoryStateType {
  const categorys: categoryType = state.listCategory.find(item => item.id === state.selectCategory.id);
  let categoryes: Array<categoryType> = [];
  if (!!categorys) {
    categoryes = state.listCategory.map(item => {
      if (item.id === state.selectCategory.id) {
        return state.selectCategory;
      } else {
        return item;
      }
    });
  } else {
    if (state.listCategory.length > 0) {
      categoryes = [
        ...state.listCategory,
        state.selectCategory
      ];
    } else {
      categoryes = [
        state.selectCategory
      ];
    }
  }
  return {
    ...state,
    listCategory: [
      ...categoryes
    ],
    isShowModalCategory: false,
  };
}

function cancelSaveCategory(state: categoryStateType, action: any): categoryStateType {
  return {
    ...state,
    selectCategory: category,
    isShowModalCategory: false,
  };
}

function deleteCategory(state: categoryStateType, action: any): categoryStateType {
  return {
    ...state,
    listCategory: [
      ...state.listCategory.filter(item => item.id !== action.idCategory)
    ],
  };
}

function editCategory(state: categoryStateType, action: any): categoryStateType {
  return {
    ...state,
    selectCategory: state.listCategory.find(item => item.id === action.idCategory),
    isShowModalCategory: true,
  };
}
