export const addNewCourse = () => (dispatch: any) => {
  dispatch(addNewCourseAction());
};

export const saveCourse = () => (dispatch: any) => {
  dispatch(saveCourseAction());
};

export const cancelSaveCourse = () => (dispatch: any) => {
  dispatch(cancelSaveCourseAction());
};

export const changeNameCourse = (name: string) => (dispatch: any) => {
  dispatch(changeNameCourseAction(name));
};

export const editCourse = (idCourse: string) => (dispatch: any) => {
  dispatch(editCourseAction(idCourse));
};

export const deleteCourse = (idCourse: string) => (dispatch: any) => {
  dispatch(deleteCourseAction(idCourse));
};

export const showModalCourse = (isShow: boolean) => (dispatch: any) => {
  dispatch(showModalCourseAction(isShow));
};

export const courseAction: any = {
  addNewCourse,
  saveCourse,
  editCourse,
  deleteCourse,
  showModalCourse,
  changeNameCourse,
  cancelSaveCourse,
};

/* Actions */
function addNewCourseAction() {
  return {type: 'ADD_NEW_COURSE'};
}

function saveCourseAction() {
  return {type: 'SAVE_COURSE'};
}

function editCourseAction(idCourse: string) {
  return {type: 'EDIT_COURSE', idCourse};
}

function deleteCourseAction(idCourse: string) {
  return {type: 'DELETE_COURSE', idCourse};
}

function showModalCourseAction(isShow: boolean) {
  return {type: 'SHOW_MODAL_COURSE', isShow};
}

function changeNameCourseAction(name: string) {
  return {type: 'CHANGE_NAME_COURSE', name};
}

function cancelSaveCourseAction() {
  return {type: 'CANCEL_SAVE_COURSE'};
}