type HeaderTypeProps = {
  title: string;
  description: string;
};

const SubheadingComponent = ({ title, description }: HeaderTypeProps) => {
  return (
    <div>
      <h2 className="font-semibold mb-7 text-black text-[23px] max-[1000px]:text-xl">
        {title}
      </h2>

      <p className="text-gray-600 -mt-2 text-sm  max-[1000px]:mt-4 max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default SubheadingComponent;
