type HeaderTypeProps = {
  title: string;
  description?: string;
  align?: "start" | "center" | "end";
  className?: string;
};

const alignClasses = {
  start: "items-start text-left",
  center: "items-center text-center",
  end: "items-end text-right",
} as const;

const PageHeading = ({
  title,
  description,
  align = "start",
  className = "",
}: HeaderTypeProps) => {
  return (
    <div
      className={`flex flex-col justify-center gap-5 max-[1000px]:gap-4 ${alignClasses[align]} ${className}`}
    >
      <h1 className="text-5xl font-semibold text-black max-[1000px]:text-xl">
        {title}
      </h1>

      {description && (
        <p className="w-[80%] text-sm text-gray-600 max-[1000px]:w-full md:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeading;