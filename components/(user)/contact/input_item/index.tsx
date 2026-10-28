import { FeedbackFormInputType } from "@/types/links";

type InputPropsType = {
  item: FeedbackFormInputType;
};

const Input = ({ item }: InputPropsType) => {
  return (
    <div className="flex w-full min-w-0 flex-col gap-1">
      <label
        htmlFor={item.id}
        className="text-sm font-normal text-gray-600 max-[1000px]:text-xs"
      >
        {item.label}
      </label>

      {item.type === "textarea" ? (
        <textarea
          id={item.id}
          name={item.id}
          placeholder={item.placeholder}
          className="box-border min-h-32 w-full min-w-0 resize-none rounded-sm border border-(--line-color) p-3 text-sm outline-none focus:ring-1 focus:ring-(--logo-color) max-[1000px]:p-2 max-[1000px]:text-xs"
        />
      ) : (
        <input
          id={item.id}
          name={item.id}
          type="text"
          placeholder={item.placeholder}
          className="box-border w-full min-w-0 rounded-sm border border-(--line-color) p-3 text-sm outline-none focus:ring-1 focus:ring-(--logo-color) max-[1000px]:p-2 max-[1000px]:text-xs"
        />
      )}
    </div>
  );
};

export default Input;