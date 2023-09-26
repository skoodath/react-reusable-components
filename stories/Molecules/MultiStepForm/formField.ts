export const formFields = {
  firstName: {
    name: "firstName",
    label: "First Name",
  },
  lastName: {
    name: "lastName",
    label: "Last Name",
  },
  address1: {
    name: "address1",
    label: "Address Line 1",
  },
  address2: {
    name: "address2",
    label: "Address Line 2",
  },
  city: {
    name: "city",
    label: "City",
  },
  state: {
    name: "state",
    label: "State",
  },
  pinCode: {
    name: "pin",
    label: "Pin code",
  },

  email: {
    name: "email",
    label: "Email Address",
  },
  phone: {
    name: "phone",
    label: "Phone Number",
  },
};

export type FormFieldProps = typeof formFields;
