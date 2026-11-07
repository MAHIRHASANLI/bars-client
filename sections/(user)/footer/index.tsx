import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import {
  FaCcVisa,
  FaCcMastercard,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa6";
import { links } from "@/components/(user)/navbar/links";
import numberOneLogo from "@/images/numberone-logo.png";
import { MdOutlineMail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineTikTok } from "react-icons/ai";

const categoryLinks = links.filter((l) => l.slug?.startsWith("/category"));

const columns = [
  {
    title: "Xidmətlər",
    items: [
      { title: "Texniki servis", href: "/isupport" },
      { title: "Ustalar üçün", href: "/ustalar-ucun" },
      { title: "Filiallar", href: "/branches" },
    ],
  },
  {
    title: "Müştərilər üçün",
    items: [
      { title: "Brendlər", href: "/brands" },
      { title: "Əks əlaqə", href: "/contact" },
    ],
  },
  {
    title: "Məlumat",
    items: [
      { title: "Haqqımızda", href: "" },
      { title: "Mağaza tapın", href: "/branches" },
      { title: "Əlaqə məlumatları", href: "/contact" },
      { title: "Məxfilik siyasəti", href: "/privacy-policy" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com/", Icon: CiFacebook },
  { label: "TikTok", href: "https://tiktok.com/", Icon: AiOutlineTikTok },
  { label: "YouTube", href: "https://youtube.com/", Icon: MdOutlineMail},
];

const linkClass =
  "text-sm text-gray-800 transition hover:text-(--secondary-color) hover:underline";
const titleClass = "mb-5 text-xl font-semibold";
const payments = [
  { label: "Visa", Icon: FaCcVisa, color: "text-[#1A1F71]" },
  { label: "Mastercard", Icon: FaCcMastercard, color: "text-[#EB001B]" },
  { label: "Apple Pay", Icon: FaApplePay, color: "text-black" },
  { label: "Google Pay", Icon: FaGooglePay, color: "text-gray-700" },
];
const FooterComponent = () => {
  return (
    <footer className="border-t border-(--line-color) bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-5 gap-10 max-[1100px]:grid-cols-3 max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
          {/* Mağaza */}
          <div>
            <h3 className={titleClass}>Mağaza</h3>
            <ul className="flex flex-col gap-3">
              {categoryLinks.map((item) => (
                <li key={item.slug}>
                  <Link href={item.slug || ""} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digər sütunlar */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className={titleClass}>{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className={linkClass}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Number One loqosu (Apple blokunun yerinə) */}
          <div className="max-[1100px]:col-span-3 max-[700px]:col-span-2 max-[480px]:col-span-1">
            <Link href="/" aria-label="Number One">
              <Image
                src={numberOneLogo}
                alt="Number One - The science of adhesives"
                className="h-auto w-44"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-gray-700">
              BARS — yapışdırıcı və tikinti materialları sahəsində etibarlı
              brend. Peşəkar həllər və keyfiyyətli məhsullar bir ünvanda.
            </p>
          </div>
        </div>

        {/* Alt hissə */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-(--line-color) pt-8">
         <div className="">
           <div className="  flex flex-wrap items-center justify-start gap-4 max-[700px]:justify-start">
            {payments.map(({ label, Icon, color }) => (
              <Icon
                key={label}
                aria-label={label}
                title={label}
                className={`h-6 w-auto ${color}`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {new Date().getFullYear()} BARS Azerbaijan. Bütün hüquqlar qorunur.
          </p>
         </div>
          {/* Onlayn ödəniş üsulları */}

          <div className="flex items-center gap-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-700 transition hover:text-(--secondary-color)"
              >
                <Icon className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
