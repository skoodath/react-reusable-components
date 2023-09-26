import React from "react";
import { Formik, Form, Field } from "formik";
import { formSchema } from "./validateSchema";
import { Grid } from "@mui/material";
import TextField from "@/stories/Atoms/Input/Input";
import Button from "@/stories/Atoms/Button/Button";
import { FormFieldProps } from "../formField";

type FormProps = {
  formFieldProps: FormFieldProps;
};

const FormOne = ({ formFieldProps }: FormProps) => {
  const { firstName, lastName, email, phone } = formFieldProps;
  console.log(firstName);

  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <Field
          required
          as={TextField}
          label={firstName.label}
          name={firstName.name}
          type="text"
          variant="outlined"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Field
          required
          as={TextField}
          label={lastName.label}
          name={lastName.name}
          type="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Field
          required
          as={TextField}
          label={email.label}
          name={email.name}
          type="text"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Field
          required
          as={TextField}
          label={phone.label}
          name={phone.name}
          type="text"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default FormOne;
