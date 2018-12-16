export type categoryType = {
  id: string;
  name: string;
}
export const category: categoryType = {
  id: '',
  name: '',
};

export type categoryStateType = {
  isShowModalCategory: boolean;
  listCategory: Array<categoryType>;
  selectCategory: categoryType;
};

export const categoryState: categoryStateType = {
  isShowModalCategory: false,
  listCategory: [],
  selectCategory: category,
};

export type formStudyStateType = {
  isShowModalFormStudy: boolean;
  listFormStudy: Array<categoryType>;
  selectFormStudy: categoryType;
};

export const formStudyState: formStudyStateType = {
  isShowModalFormStudy: false,
  listFormStudy: [],
  selectFormStudy: category,
};

export type courseStateType = {
  isShowModalCourse: boolean;
  listCourse: Array<categoryType>;
  selectCourse: categoryType;
};

export const courseState: courseStateType = {
  isShowModalCourse: false,
  listCourse: [],
  selectCourse: category,
};

export type adminStateType = {
  category: categoryStateType;
  formStudy: formStudyStateType;
  course: courseStateType;
};

export const adminState: adminStateType = {
  category: categoryState,
  formStudy: formStudyState,
  course: courseState,
};