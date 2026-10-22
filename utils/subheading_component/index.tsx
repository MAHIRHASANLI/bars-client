type HeaderTypeProps = {
  title: string;
  description: string;
};

const SubheadingComponent = ({ title, description }: HeaderTypeProps) => {
  const formattedTitle = title.split("BARS");
  return (
    <div>
      <h2 className="font-semibold mb-5 text-black text-3xl max-[1000px]:text-xl leading-7">
        {formattedTitle.map((text, index) => (
          <span key={index}>
            {text}
            {index < formattedTitle.length - 1 && (
              <span className="text-(--logo-color)">BARS</span>
            )}
          </span>
        ))}
      </h2>

      <p className="text-gray-600 -mt-2 text-sm  max-[1000px]:mt-4 max-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

export default SubheadingComponent;
