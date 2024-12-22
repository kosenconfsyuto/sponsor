export interface inputFields {
  sponsorType: string;
  name: string;
  address: string;
  nickname: string;
  email: string;
  amount: number;
  paymentMethod: string;
  recaptchaToken: string;
}

export const initialInputFields: inputFields = {
  sponsorType: "",
  name: "",
  address: "",
  nickname: "",
  email: "",
  amount: 0,
  paymentMethod: "",
  recaptchaToken: "",
};

export interface inputErrors {
  field: keyof inputFields,
  message: string,
  objKey: string,
};