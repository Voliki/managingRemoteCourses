export const addNewCategory = () => (dispatch: any) => {
  dispatch(addNewCategoryAction());
};

export const saveCategory = () => (dispatch: any) => {
  dispatch(saveCategoryAction());
};

export const cancelSaveCategory = () => (dispatch: any) => {
  dispatch(cancelSaveCategoryAction());
};

export const changeNameCategory = (name: string) => (dispatch: any) => {
  dispatch(changeNameCategoryAction(name));
};

export const editCategory = (idCategory: string) => (dispatch: any) => {
  dispatch(editCategoryAction(idCategory));
};

export const deleteCategory = (idCategory: string) => (dispatch: any) => {
  dispatch(deleteCategoryAction(idCategory));
};

export const showModalCategory = (isShow: boolean) => (dispatch: any) => {
  dispatch(showModalCategoryAction(isShow));
};

export const categoryAction: any = {
  addNewCategory,
  saveCategory,
  editCategory,
  deleteCategory,
  showModalCategory,
  changeNameCategory,
  cancelSaveCategory,
};

/* Actions */
function addNewCategoryAction() {
  return {type: 'ADD_NEW_CATEGORY'};
}

function saveCategoryAction() {
  return {type: 'SAVE_CATEGORY'};
}

function editCategoryAction(idCategory: string) {
  return {type: 'EDIT_CATEGORY', idCategory};
}

function deleteCategoryAction(idCategory: string) {
  return {type: 'DELETE_CATEGORY', idCategory};
}

function showModalCategoryAction(isShow: boolean) {
  return {type: 'SHOW_MODAL_CATEGORY', isShow};
}

function changeNameCategoryAction(name: string) {
  return {type: 'CHANGE_NAME_CATEGORY', name};
}

function cancelSaveCategoryAction() {
  return {type: 'CANCEL_SAVE_CATEGORY'};
}