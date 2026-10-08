import Link from "next/link";

const ContactServiceLinkComp = ({ content }: { content: string }) => {
  return (
    <Link
      href=""
      className="text-(--logo-color) text-[13px] font-semibold hover:text-(--logo-color-hover) hover:underline max-[1000px]:text-xs"
    >
      {content}
    </Link>
  );
};

export default ContactServiceLinkComp;
