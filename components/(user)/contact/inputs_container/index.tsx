 import Input from "../input_item";
import { FeedbackFormInputType } from "@/types/links";

const Inputs = () => {
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

  return (
    <>
      {inputFields.map((item) => (
        <Input key={item.id} item={item} />
      ))}
    </>
  );
};

export default Inputs;