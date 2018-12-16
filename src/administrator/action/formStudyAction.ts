export const addNewFormStudy = () => (dispatch: any) => {
  dispatch(addNewFormStudyAction());
};

export const saveFormStudy = () => (dispatch: any) => {
  dispatch(saveFormStudyAction());
};

export const cancelSaveFormStudy = () => (dispatch: any) => {
  dispatch(cancelSaveFormStudyAction());
};

export const changeNameFormStudy = (name: string) => (dispatch: any) => {
  dispatch(changeNameFormStudyAction(name));
};

export const editFormStudy = (idFormStudy: string) => (dispatch: any) => {
  dispatch(editFormStudyAction(idFormStudy));
};

export const deleteFormStudy = (idFormStudy: string) => (dispatch: any) => {
  dispatch(deleteFormStudyAction(idFormStudy));
};

export const showModalFormStudy = (isShow: boolean) => (dispatch: any) => {
  dispatch(showModalFormStudyAction(isShow));
};

export const formStudyAction: any = {
  addNewFormStudy,
  saveFormStudy,
  editFormStudy,
  deleteFormStudy,
  showModalFormStudy,
  changeNameFormStudy,
  cancelSaveFormStudy,
};

/* Actions */
function addNewFormStudyAction() {
  return {type: 'ADD_NEW_FORM_STUDY'};
}

function saveFormStudyAction() {
  return {type: 'SAVE_FORM_STUDY'};
}

function editFormStudyAction(idFormStudy: string) {
  return {type: 'EDIT_FORM_STUDY', idFormStudy};
}

function deleteFormStudyAction(idFormStudy: string) {
  return {type: 'DELETE_FORM_STUDY', idFormStudy};
}

function showModalFormStudyAction(isShow: boolean) {
  return {type: 'SHOW_MODAL_FORM_STUDY', isShow};
}

function changeNameFormStudyAction(name: string) {
  return {type: 'CHANGE_NAME_FORM_STUDY', name};
}

function cancelSaveFormStudyAction() {
  return {type: 'CANCEL_SAVE_FORM_STUDY'};
}