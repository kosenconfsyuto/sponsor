export interface Fields {
  sponsorType: string;
  name: string;
  address: string;
  nickname: string;
  email: string;
  amount: number;
  paymentMethod: string;
}

export const initialFields: Fields = {
  sponsorType: "",
  name: "",
  address: "",
  nickname: "",
  email: "",
  amount: 0,
  paymentMethod: "",
};