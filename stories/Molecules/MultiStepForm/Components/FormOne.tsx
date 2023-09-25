import React from "react";
import { Formik, Form, Field } from "formik";
import { formSchema } from "./validateSchema";
import { Grid } from "@mui/material";
import TextField from "../../../Atoms/Input/Input";
import Button from "../../../Atoms/Button/Button";

interface FormOneValues {
  firstName: string;
  lastName: string;
}

interface FormOneProps {
  defaultValues: FormOneValues;
  onSubmit: (values: FormOneValues) => void;
}

const FormOne = ({ defaultValues, onSubmit }: FormOneProps) => {
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={onSubmit}
      validationSchema={formSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Grid container flexDirection="column" spacing={2}>
            <Grid item>
              <TextField
                required
                label="First name"
                type="text"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                label="Last name"
                type="text"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: { xs: "100%", md: "unset" } }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FormOne;
