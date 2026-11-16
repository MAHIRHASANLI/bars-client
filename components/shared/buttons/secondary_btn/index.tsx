import Link from "next/link";

type SecondaryButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const SecondaryButton = ({
  href,
  children,
  onClick,
  type = "button",
}: SecondaryButtonProps) => {
  const className =
    "block w-full cursor-pointer rounded-4xl border border-(--logo-color) px-8 py-4 text-center text-sm font-semibold leading-4 text-(--logo-color) duration-300 hover:border-(--logo-color-hover) hover:text-(--logo-color-hover) max-[800px]:py-3 max-[800px]:text-xs";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default SecondaryButton;