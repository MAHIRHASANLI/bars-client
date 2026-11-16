import Link from "next/link";

type PrimaryButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton = ({
  href,
  children,
  onClick,
  type = "button",
}: PrimaryButtonProps) => {
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

export default PrimaryButton;

//? 1. Link kimi:
// <PrimaryButton href="/contact">
//   Əlaqə
// </PrimaryButton>


//? 2. Adi button kimi:
// <PrimaryButton onClick={handleClick}>
//   Müraciət et
// </PrimaryButton>


//? 3. Form daxilində submit button kimi:
// <PrimaryButton type="submit">
//   Göndər
// </PrimaryButton>


//? 4. Formu sıfırlamaq üçün:
// <PrimaryButton type="reset">
//   Təmizlə
// </PrimaryButton>