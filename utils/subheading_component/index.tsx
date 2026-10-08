type HeaderTypeProps = {
  title: string;
  description: string;
};

const SubheadingComponent = ({ title, description }: HeaderTypeProps) => {
  return (
    <div>
      <h2 className="font-semibold text-black text-[22px] max-[1000px]:text-xl">
        {title}
      </h2>

      <p className="text-gray-600 text-sm mt-5 max-[1000px]:mt-4 max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default SubheadingComponent;
