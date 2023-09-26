import React, { useState } from "react";
import { FormOne, FormTwo, FormThree } from "./Components";
import Styles from "./MultiStepForm.styles";
import { Grid } from "@mui/material";
import Button from "@/stories/Atoms/Button/Button";
import TextField from "@/stories/Atoms/Input/Input";
import { formSchema } from "./Components/validateSchema";
import { FormFieldProps, formFields } from "./formField";
import { Form, Formik } from "formik";
import { FormObjectProps } from "./MultiStepForm.types";

const steps = ["details one", "details two"];
const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const defaultValues: FormObjectProps = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pinCode: "",
    age: "",
    email: "",
    phone: "",
  };

  const renderForm = (step: number) => {
    switch (step) {
      case 0:
        return <FormOne formFieldProps={formFields} />;
      case 1:
        return <FormTwo />;
      case 2:
        return <FormThree />;
    }
  };

  const isLastStep = activeStep === steps.length - 1;
  const activeFormSchema = formSchema[activeStep];

  const handleBackToPrev = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (data: FormObjectProps) => {
    console.log(data);
    /*    console.log(data);
    if (!isLastStep) { */
    setActiveStep(activeStep + 1);
    /*     } else {
      console.log(data);
    } */
  };

  console.log(activeStep);
  return (
    <Styles.Root>
      <Styles.Wrapper>
        <Styles.Heading variant="h5">
          User form: {steps[activeStep]}
        </Styles.Heading>
      </Styles.Wrapper>
      <Styles.Wrapper>
        <Formik
          initialValues={defaultValues}
          onSubmit={handleSubmit}
          validationSchema={activeFormSchema}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Grid item>{renderForm(activeStep)}</Grid>
              <Grid item my={3}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  gap={3}
                >
                  {activeStep > 0 && (
                    <Grid
                      item
                      component={Button}
                      type="button"
                      variant="outlined"
                      sx={{ width: { xs: "100%", md: "unset" } }}
                      onClick={handleBackToPrev}
                    >
                      Back
                    </Grid>
                  )}
                  <Grid
                    item
                    component={Button}
                    type="submit"
                    variant="contained"
                    sx={{ width: { xs: "100%", md: "unset" } }}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Styles.Wrapper>
    </Styles.Root>
  );
};

export default MultiStepForm;
