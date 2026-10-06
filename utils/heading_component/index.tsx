type HeaderTypeProps = {
  title: string;
  description: string;
};

const PageHeader = ({ title, description }: HeaderTypeProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-3">
      <h1 className="font-semibold text-black text-3xl max-[1000px]:text-xl">
        {title}
      </h1>

      <p className="text-gray-600 text-center text-sm max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
