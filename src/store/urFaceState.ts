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
};