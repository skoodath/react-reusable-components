import { object, string, number, date, InferType } from "yup";

export const formSchema = [
  object().shape({
    firstName: string().required("First name cannot be blank"),
    lastName: string().required("Last name cannot be blank"),
    email: string().email(),
    phone: string()
      .matches(/^\d{10}$/gi, "Phone number must be 10 digits")
      .required("Phone number is required"),
  }),
  object().shape({
    address1: string().required("Address 1 cannot be blank"),
    address2: string().notRequired(),
    city: string().required("City cannot be blank"),
    state: string().required("State cannot be blank"),
    pinCode: string()
      .matches(/^\d{6}$/gi, "Should be max 7 digits")
      .required("Pin cannot be blank"),
  }),
];
