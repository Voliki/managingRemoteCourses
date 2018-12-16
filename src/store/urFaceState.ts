export const defaultUrListener: ListenerType = {
  id: '',
  firstName: '',
  name: '',
  patronymic: '',
  email: '',
  education: '',
  educationDocument: '',
  identificationDocument: '',
  documentChangingName: '',
  otherDocumentListener: '',
  position: '',
  SNILS: '',
  TINListener: '',
  postcodeMFListener: '',
  addressMFListener: '',
  contactPhoneListener: '',
};

export type UrFaceStateType = {
  courseCategory: string;
  formStudy: string;
  course: string;
  nameUrFace: string;
  TINUr: string;
  requisites: string;
  nameRepresentativeLegalEntity: string;
  emailUr: string;
  listener: Array<ListenerType>;
  selectListener: ListenerType;
};

export type ListenerType = {
  id: string;
  firstName: string;
  name: string;
  patronymic: string;
  email: string;
  education: string;
  educationDocument: any;
  identificationDocument: any;
  documentChangingName: any;
  otherDocumentListener: any;
  position: string;
  SNILS: string;
  TINListener: string;
  postcodeMFListener: string;
  addressMFListener: string;
  contactPhoneListener: string;
};

export const urFaceState: UrFaceStateType = {
  courseCategory: '',
  formStudy: '',
  course: '',
  nameUrFace: '',
  TINUr: '',
  requisites: '',
  nameRepresentativeLegalEntity: '',
  emailUr: '',
  listener: [],
  selectListener: {
    ...defaultUrListener,
  },
};