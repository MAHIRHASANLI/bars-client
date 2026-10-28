type HeaderTypeProps = {
  title: string;
  description?: string;
  className?: string;
};

const PageHeading = ({
  title,
  description,
  className = "start",
}: HeaderTypeProps) => {
  return (
    <div
      className={`items-${className} flex flex-col justify-center gap-5 max-[1000px]:gap-4`}
    >
      <h1 className="font-semibold text-black text-5xl max-[1000px]:text-xl">
        {title}
      </h1>

      <p className="text-gray-600  text-sm w-[80%] max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default PageHeading;
