export interface fields {
    sponsorType: "person" | "company";
    name: string;
    address: string;
    nickname: string;
    email: string;
    amount: number;
    paymentMethod: string;
    recaptchaToken: string;
}