import { LinkType } from "@/types/links";
export const links: LinkType[] = [
  {
    title: "Yapışdırıcı",
    href: "/category/adhesives",
    children: [
      {
        title: "Bütün yapışdırıcılar",
        href: "/category/adhesives",
      },
      {
        title: "Mərmər yapışdırıcıları",
        href: "/category/adhesives/marble-adhesives",
      },
      {
        title: "Silikonlar",
        href: "/category/adhesives/silicones",
      },
      {
        title: "Penalar",
        href: "/category/adhesives/construction-foams",
      },
      {
        title: "Universal yapışdırıcılar",
        href: "/category/adhesives/universal-adhesives",
      },
      {
        title: "Sənaye yapışdırıcıları",
        href: "/category/adhesives/industrial-adhesives",
      },
    ],
  },
  {
    href: "/category/meters",
    title: "Sayğaclar",
    children: [
      { title: "Bütün sayğaclar", href: "/category/meters" },
      {
        title: "Turbin tipli qaz sayğacları",
        href: "/category/meters/turbine-gas-meters",
      },
      {
        title: "Rotor tipli qaz sayğacları",
        href: "/category/meters/rotary-gas-meters",
      },
      {
        title: "Ultrasəs tipli qaz sayğacları",
        href: "/category/meters/ultrasonic-gas-meters",
      },
      { title: "Korrektorlar", href: "/category/meters/correctors" },
      {
        title: "Mexaniki qaz sayğacları",
        href: "/category/meters/mechanical-gas-meters",
      },
      {
        title: "Smart tipli qaz sayğacları",
        href: "/category/meters/smart-gas-meters",
      },
    ],
  },

  {
    href: "/category/gas-regulators",
    title: "Qaz tənzimləyiciləri",
  },
  {
    href: "/category/gas-shut-off-valves",
    title: "Qaz bağlayıcı klapanlar",
    children: [
      {
        title: "Bütün qaz bağlayıcı klapanlar",
        href: "/category/gas-shut-off-valves",
      },
      {
        title: "Maqnit bağlayıcı klapanlar",
        href: "/category/gas-shut-off-valves/solenoid-valves",
      },
      {
        title: "Atıcı-bağlayıcı klapanlar",
        href: "/category/gas-shut-off-valves/shut-off-valves",
      },
      {
        title: "Qoruyucu klapanlar",
        href: "/category/gas-shut-off-valves/safety-valves",
      },
      {
        title: "Normalda bağlı klapanlar",
        href: "/category/gas-shut-off-valves/normally-closed-valves",
      },
    ],
  },
  {
    href: "/category/gas-alarm-devices",
    title: "Qaz alarm cihazları",
    children: [
      {
        title: "Bütün qaz alarm cihazları",
        href: "/category/gas-alarm-devices",
      },
      {
        title: "CO Detektor",
        href: "/category/gas-alarm-devices/co-detectors",
      },
      {
        title: "CH₄ Detektor",
        href: "/category/gas-alarm-devices/ch4-detectors",
      },
      {
        title: "CH₄ + CO Detektor",
        href: "/category/gas-alarm-devices/ch4-co-detectors",
      },
    ],
  },
  {
    href: "/category/gas-filters",
    title: "Qaz filtrləri",
  },
  {
    href: "/category/spare-parts",
    title: "Ehtiyat hissələri",
  },

  {
    href: "/ustalar-ucun",
    title: "Ustalar üçün",
  },
  {
    href: "/isupport",
    title: "Texniki servis",
  },
  {
    href: "/brendler",
    title: "Brendlər",
  },
  {
    href: "/contact",
    title: "Əlaqə",
  },
];
import Link from "next/link";

export const LinksComponent = () => {
  const classLink =
    "text-black text-[14px] hover:text-(--logo-color) relative  min-[1000px]:after:block  after:absolute after:content-['']  after:w-full  min-[1000px]:after:h-px  after:bottom-0  after:opacity-0  after:bg-(--logo-color) hover:after:opacity-100";
  return (
    <ul className="min-[1000px]:flex min-[1000px]:justify-between min-[1000px]:pt-px min-[1000px]:mb-6 min-[1000px]:gap-2">
      {links?.map(({ href = "", title, children }) => {
        const hasChildren = !!children?.length;
        const isSeparated = href === "/ustalar-ucun";

        return (
          <li
            key={href}
            className={`
              group relative
              max-[1000px]:border-px max-[1000px]:border-t  max-[1000px]:border-(--secondary-color)
              max-[1000px]:pt-2 max-[1000px]:pb-2
              ${
                isSeparated
                  ? "after:content-[''] min-[1000px]:after:absolute after:-left-3 after:top-0 after:translate-y-1/2 after:h-4 after:w-0.5 after:bg-(--secondary-color)"
                  : ""
              }
            `}
          >
            <Link href={href} className={classLink}  onClick={(e) => e.currentTarget.blur()}>
              {title}
            </Link>

            {hasChildren && (
              <ul
                className="
                  /* Desktop: hover olanda açılan menyu */
                 min-[1000px]:p-5 min-[1000px]:absolute min-[1000px]:left-0 min-[1000px]:top-6
                  min-[1000px]:z-50 min-[1000px]:min-w-62
                  min-[1000px]:bg-white min-[1000px]:py-2
                  min-[1000px]:shadow-[0px_2px_8px_rgba(99,99,99,0.2)]
                  min-[1000px]:invisible min-[1000px]:opacity-0 min-[1000px]:translate-y-1
                  min-[1000px]:transition min-[1000px]:duration-200
                  min-[1000px]:group-hover:visible min-[1000px]:group-hover:opacity-100 min-[1000px]:group-hover:translate-y-0
                  min-[1000px]:group-focus-within:visible min-[1000px]:group-focus-within:opacity-100 min-[1000px]:group-focus-within:translate-y-0
                  /* Mobil: link altında içəridən sıralanır */
                  max-[1000px]:pl-4 max-[1000px]:pt-2
                "
              >
                {children!.map(({ href = "", title }, index) => (
                  <li key={index}>
                    <Link
                      onClick={(e) => e.currentTarget.blur()}
                      href={href}
                      className={`inline-block pt-2 ${classLink} `}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default LinksComponent;
