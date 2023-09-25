import React, { useState } from "react";
import { FormOne, FormTwo, FormThree } from "./Components";

const MultiStepForm = () => {
  const [step, setstep] = useState<1 | 2 | 3>(1);

  const handleStepChange = () => {};
  return (
    <>
      {step === 1 && <FormOne />}
      {step === 2 && <FormTwo />}
      {step === 3 && <FormThree />}
    </>
  );
};

export default MultiStepForm;
