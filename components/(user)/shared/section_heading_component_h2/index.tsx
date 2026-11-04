type HeaderTypeProps = {
  title: string;
  description?: string;
  align?: "start" | "center" | "end";
  className?: string;
};

const alignClasses = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
} as const;

const SectionHeading = ({
  title,
  description,
  align = "start",
  className = "",
}: HeaderTypeProps) => {
  const formattedTitle = title.split(/(BARS|ENERJİ-N)/g);

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <h2 className="mb-5 text-3xl font-semibold leading-7 text-black max-[1000px]:text-xl">
        {formattedTitle.map((text, index) => (
          <span
            key={index}
            className={
              text === "BARS" || text === "ENERJİ-N"
                ? "text-(--logo-color)"
                : ""
            }
          >
            {text}
          </span>
        ))}
      </h2>

      {description && (
        <p className="-mt-2 text-sm text-gray-600 max-[1000px]:mt-4 max-[1000px]:text-xs">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;