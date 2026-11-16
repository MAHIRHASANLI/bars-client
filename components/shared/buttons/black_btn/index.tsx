import Link from "next/link";

type BlackButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const BlackButton = ({
  href,
  children,
  onClick,
  type = "button",
}: BlackButtonProps) => {
  const className =
    "inline-block cursor-pointer rounded-4xl border border-(--logo-color) bg-(--logo-color) px-8 py-4 text-center text-sm font-semibold leading-4 text-white duration-300 hover:border-(--logo-color-hover) hover:bg-(--logo-color-hover) max-[800px]:px-5 max-[800px]:py-3 max-[800px]:text-xs max-[400px]:px-6";

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

export default BlackButton;

//? 1. Link kimi:
// <BlackButton href="/contact">
//   Əlaqə
// </BlackButton>


//? 2. Adi button kimi:
// <BlackButton onClick={handleClick}>
//   Müraciət et
// </BlackButton>


//? 3. Form daxilində submit button kimi:
// <BlackButton type="submit">
//   Göndər
// </BlackButton>


//? 4. Formu sıfırlamaq üçün:
// <BlackButton type="reset">
//   Təmizlə
// </BlackButton>