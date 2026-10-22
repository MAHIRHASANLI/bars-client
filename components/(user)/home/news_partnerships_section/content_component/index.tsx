import Link from "next/link";

const ContentComponent = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <div className="p-6 flex flex-col justify-center items-center text-center">
      <h3 className="text-black text-3xl font-semibold mb-4">{title}</h3>
      <p className="max-w-62 text-sm font-normal leading-4">{description}</p>
      <Link
        href={href}
        className="mt-8 px-8 py-4 rounded-4xl text-sm font-semibold leading-4 text-(--logo-color) border border-(--logo-color) hover:text-(--logo-color-hover ) hover:border-(--logo-color-hover)"
      >
        Hamısına bax
      </Link>
    </div>
  );
};

export default ContentComponent;
