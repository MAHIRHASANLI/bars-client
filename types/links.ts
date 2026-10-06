export type LinkType = {
  href: string;
  label: string;
};

export type FeedbackFormInputType = {
  id: string;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
};

export type ServisPropsType ={
  id? : number;
  title: string;
  description: string;
  imgUrl: string;
}