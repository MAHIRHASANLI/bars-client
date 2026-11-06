import { LinkType } from "@/types/links";
import Link from "next/link";
export const links: LinkType[] = [
  {
    title: "Yapışdırıcı",
    slug: "/category/adhesives",
    children: [
      {
        title: "Bütün yapışdırıcılar",
        slug: "/category/adhesives",
      },
      {
        title: "Mərmər yapışdırıcıları",
        slug: "/category/adhesives/marble-adhesives",
      },
      {
        title: "Silikonlar",
        slug: "/category/adhesives/silicones",
      },
      {
        title: "Penalar",
        slug: "/category/adhesives/construction-foams",
      },
      {
        title: "Universal yapışdırıcılar",
        slug: "/category/adhesives/universal-adhesives",
      },
      {
        title: "Sənaye yapışdırıcıları",
        slug: "/category/adhesives/industrial-adhesives",
      },
    ],
  },
  {
    slug: "/category/meters",
    title: "Qaz sayğacları",
    children: [
      { title: "Bütün sayğaclar", slug: "/category/meters" },
      {
        title: "Turbin tipli qaz sayğacları",
        slug: "/category/meters/turbine-gas-meters",
      },
      {
        title: "Rotor tipli qaz sayğacları",
        slug: "/category/meters/rotary-gas-meters",
      },
      {
        title: "Ultrasəs tipli qaz sayğacları",
        slug: "/category/meters/ultrasonic-gas-meters",
      },
      { title: "Korrektorlar", slug: "/category/meters/correctors" },
      {
        title: "Mexaniki qaz sayğacları",
        slug: "/category/meters/mechanical-gas-meters",
      },
      {
        title: "Smart tipli qaz sayğacları",
        slug: "/category/meters/smart-gas-meters",
      },
    ],
  },

  {
    slug: "/category/gas-regulators",
    title: "Qaz tənzimləyiciləri",
  },
  {
    slug: "/category/gas-shut-off-valves",
    title: "Qaz bağlayıcı klapanlar",
    children: [
      {
        title: "Bütün qaz bağlayıcı klapanlar",
        slug: "/category/gas-shut-off-valves",
      },
      {
        title: "Maqnit bağlayıcı klapanlar",
        slug: "/category/gas-shut-off-valves/solenoid-valves",
      },
      {
        title: "Atıcı-bağlayıcı klapanlar",
        slug: "/category/gas-shut-off-valves/shut-off-valves",
      },
      {
        title: "Qoruyucu klapanlar",
        slug: "/category/gas-shut-off-valves/safety-valves",
      },
      {
        title: "Normalda bağlı klapanlar",
        slug: "/category/gas-shut-off-valves/normally-closed-valves",
      },
    ],
  },
  {
    slug: "/category/gas-alarm-devices",
    title: "Qaz alarm cihazları",
    children: [
      {
        title: "Bütün qaz alarm cihazları",
        slug: "/category/gas-alarm-devices",
      },
      {
        title: "CO Detektor",
        slug: "/category/gas-alarm-devices/co-detectors",
      },
      {
        title: "CH₄ Detektor",
        slug: "/category/gas-alarm-devices/ch4-detectors",
      },
      {
        title: "CH₄ + CO Detektor",
        slug: "/category/gas-alarm-devices/ch4-co-detectors",
      },
    ],
  },
  {
    slug: "/category/gas-filters",
    title: "Qaz filtrləri",
  },
  {
    slug: "/category/spare-parts",
    title: "Digər",
    children: [
      {
        title: "Bütün digər məhsullar",
        slug: "/category/spare-parts",
      },
      {
        slug: "/category/water-meters",
        title: "Su sayğacları",
      },
      {
        slug: "/category/gas-regulator-stations",
        title: "Şkaf tipli qaz tənzimləyici məntəqə (ŞQTM)",
      },
      {
        slug: "/category/ozone-generators",
        title: "Ozon generatorları",
      },
      {
        slug: "/category/pressure-gauges",
        title: "Manometrlər",
      },
      {
        slug: "/category/valves",
        title: "Kranlar",
      },
      {
        title: "Qaz sayğacı ehtiyat hissələri",
        slug: "/category/spare-parts/gas-meter-spare-parts",
      },
    ],
  },

  {
    slug: "/ustalar-ucun",
    title: "Ustalar üçün",
  },
  {
    slug: "/branches",
    title: "Filiallar",
  },
  {
    slug: "/isupport",
    title: "Texniki servis",
  },
  {
    slug: "/brands",
    title: "Brendlər",
  },
  {
    slug: "/contact",
    title: "Əlaqə",
  },
];

export const LinksComponent = ({
  handleCloseMenu,
}: {
  handleCloseMenu?: () => void;
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
    setTimeout(() => {
      handleCloseMenu?.();
    }, 300);
  };
  const classLink =
    "text-black text-[14px] hover:text-(--logo-color) relative  min-[1000px]:after:block  after:absolute after:content-['']  after:w-full  min-[1000px]:after:h-px  after:bottom-0  after:opacity-0  after:bg-(--logo-color) hover:after:opacity-100";
  return (
    <ul className="min-[1000px]:flex min-[1000px]:justify-between min-[1000px]:pt-px min-[1000px]:mb-6 min-[1000px]:gap-2">
      {links?.map(({ slug = "", title, children }) => {
        const hasChildren = !!children?.length;
        const isSeparated = slug === "/ustalar-ucun";

        return (
          <li
            key={slug}
            className={`
              group relative
              max-[1000px]:border-px max-[1000px]:border-t  max-[1000px]:border-(--secondary-color)
              max-[1000px]:pt-2 max-[1000px]:pb-2
              ${
                isSeparated
                  ? "after:content-[''] min-[1000px]:after:absolute after:-left-6 h-3 after:-top-1 after:translate-y-1/2 after:h-4 after:w-px ml-6 after:bg-(--secondary-color)"
                  : ""
              }
            `}
          >
            <Link href={slug} className={classLink} onClick={handleLinkClick}>
              {title}
            </Link>

            {hasChildren && (
              <ul
                className="
                          absolute left-0 top-6 z-50 min-w-62
                          bg-white p-5 py-2 shadow-[0px_2px_8px_rgba(99,99,99,0.2)]
                          invisible translate-y-1 opacity-0
                          transition duration-200
                          group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                          group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100
                          max-[999px]:static max-[999px]:visible max-[999px]:translate-y-0
                          max-[999px]:pl-4 max-[999px]:pt-2 max-[999px]:opacity-100
                          max-[999px]:shadow-none
                        "
              >
                {children!.map(({ slug = "", title }, index) => (
                  <li key={index}>
                    <Link
                      onClick={handleLinkClick}
                      href={slug}
                      className={`pt-4 ${classLink} `}
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
