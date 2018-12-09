export const changeField = (field: string, value: any) => (dispatch: any) => {
  dispatch(changeFieldAction(field, value));
};

export const switchingBetweenForms = (typeForm: string) => (dispatch: any) => {
  dispatch(switchingBetweenFormsAction(typeForm));
};

/* Actions */

function switchingBetweenFormsAction(typeForm: string) {
  return {type: 'SWITCHING_BETWEEN_FORM', typeForm};
}

function changeFieldAction(field: string, value: any) {
  return {type: 'CHANGE_FIELD', field, value};
}
