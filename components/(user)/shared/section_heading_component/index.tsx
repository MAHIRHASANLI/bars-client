type HeaderTypeProps = {
  title: string;
  description?: string;
  className? :string
};

const SectionHeading = ({
  title,
  description,
  className="start"
}: HeaderTypeProps) => {
  const formattedTitle = title.split(/(BARS|ENERJİ-N)/g);

  return (
    <div>
      <h2 className={`text-${className} font-semibold mb-5 text-black text-3xl max-[1000px]:text-xl leading-7`}>
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

      <p className="text-gray-600 -mt-2 text-sm max-[1000px]:mt-4 max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;