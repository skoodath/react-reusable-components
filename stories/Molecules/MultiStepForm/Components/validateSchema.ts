import { object, string, number, date, InferType } from "yup";

export const formSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  phone: string()
    .matches(/^\d{10}$/gi, "Phone number must be 10 digits")
    .required("Phone number is required"),
  website: string().matches(
    /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Please enter a valid website"
  ),
});

export type FormSchema = InferType<typeof formSchema>;
