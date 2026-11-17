import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import LogoComponent from "@/components/(main)/navbar/logo";
import { MdEmail } from "react-icons/md";

const SOCIALS = [
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.facebook.com/", label: "Facebook", Icon: FaFacebookF },
  { href: "mailto:info@bars.com.az", label: "Email", Icon: MdEmail },
  { href: "https://wa.me/994997951050", label: "WhatsApp", Icon: FaWhatsapp },
] as const;

const FooterSection = () => {
  return (
    <footer className="mt-16 sm:mt-24 blog-container">
      {/* Sosial şəbəkələr */}
      <ul className="flex items-center gap-4">
        {SOCIALS.map(({ href, label, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full text-black transition-colors hover:bg-gray-100"
            >
              <Icon className="size-5" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Xətt + logo + copyright */}
      <div className="mt-10 flex flex-col gap-4 border-t border-gray-300 py-8 sm:flex-row sm:items-center sm:justify-between">
        <LogoComponent />

        <p className="text-sm text-gray-500 sm:max-w-xs sm:text-right sm:text-base">
          © {new Date().getFullYear()} BARS. Bütün hüquqlar qorunur.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;