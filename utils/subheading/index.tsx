type HeaderTypeProps = {
  title: string;
  description: string;
};

const SubheadingComponent = ({ title, description }: HeaderTypeProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-semibold text-black text-[22px] max-[1000px]:text-xl">
        {title}
      </h2>

      <p className="text-gray-600 text-center text-sm max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default SubheadingComponent;
