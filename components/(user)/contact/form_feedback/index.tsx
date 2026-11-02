"use client";
import Select from "../input_select";
import PrimaryButton from "../../shared/buttons/primary_button";
import { FeedbackFormInputType } from "@/types/links";
import InputComponent from "../input_component";

const inputFields: FeedbackFormInputType[] = [
  {
    id: "name",
    label: "sizə necə müraciət edək?",
    placeholder: "Əhməd",
    type: "input",
  },
  {
    id: "phone",
    label: "telefon nömrəsini və ya e-poçt ünvanını daxil edin.",
    placeholder: "+994",
    type: "input",
  },
  {
    id: "message",
    label: "ətraflı məlumat verin.",
    placeholder: "Müraciətinizi yazın...",
    type: "textarea",
  },
];
const FormFeedbackComponent = () => {
  return (
    <form className="flex w-full min-w-0 flex-col justify-center pt-8 gap-4">
      {inputFields.map((item) => (
        <InputComponent key={item.id} item={item} />
      ))}
      <Select />
      <PrimaryButton type="submit">Müraciəti göndərin</PrimaryButton>
    </form>
  );
};

export default FormFeedbackComponent;
