"use client";
import Inputs from "../inputs_container";
import Select from "../input_select";
import Button from "../btn_submit";

const FormFeedbackComponent = () => {
  return (
    <form className="flex flex-col justify-center gap-4">
      <Inputs />

      <Select />

      <Button/>
    </form>
  );
};

export default FormFeedbackComponent;
