type HeaderTypeProps = {
  title: string;
  description: string;
};

const PageHeader = ({ title, description }: HeaderTypeProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 max-[1000px]:gap-4">
      <h1 className="font-semibold text-black text-3xl max-[1000px]:text-xl">
        {title}
      </h1>

      <p className="text-gray-600 text-center text-sm w-[80%] max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
