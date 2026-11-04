import Image from "next/image";
import PageHeading from "@/components/(user)/shared/page_heading_component_h1";
import StatisticComponent from "@/components/(user)/shared/heading_section_component";
import SectionHeadingComponent from "@/components/(user)/shared/heading_section_component";

// Tərəfdaş brendlərin loqo məlumatları
// id: unikal identifikator
// name: brendin adı
// imgUrl: brend loqosunun URL ünvanı
export const partner_logos = [
  {
    id: 1,
    name: "SOCAR",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_SOCAR.svg",
  },
  {
    id: 2,
    name: "Müdafiə Nazirliyi",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ministry_of_Defence_of_the_Republic_of_Azerbaijan_logo.png",
  },
  {
    id: 3,
    name: "Azerbaijan MOD",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Azerbaijan_MOD_badge.svg",
  },
  {
    id: 4,
    name: "SOCAR",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_SOCAR.svg",
  },
  {
    id: 5,
    name: "Honeywell",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Honeywell_logo.svg",
  },
  {
    id: 6,
    name: "Elster",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Elster_logo.svg",
  },
  {
    id: 7,
    name: "Siemens",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Siemens_AG_logo.svg",
  },
  {
    id: 8,
    name: "Danfoss",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Danfoss_Logo.svg",
  },
  {
    id: 9,
    name: "ABB",
    imgUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ABB_Logo.svg",
  },
  {
    id: 10,
    name: "Schneider Electric",
    imgUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Schneider_Electric_2007.svg",
  },
];

// Bir istiqamətdə hərəkət edən loqo sətrini yaradan komponent
const MarqueeRow = ({
  logos,
  reverse = false,
}: {
  logos: typeof partner_logos;
  reverse?: boolean;
}) => {
  // Loqo siyahısı iki dəfə təkrarlanır.
  // Bu, lentin sonuna çatdıqda animasiyanın başlanğıc mövqeyinə
  // keçidini vizual olaraq fasiləsiz göstərməyə kömək edir.
  const items = [...logos, ...logos];

  return (
    // Loqoların konteynerdən kənara çıxan hissələrini gizlədir.
    // Kənarlarda gradient mask effekti yaradır.
    <div className="group overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      {/* 
        w-max: elementin enini daxilindəki loqolara uyğun müəyyən edir.
        animate-marquee: normal hərəkət istiqaməti.
        animate-marquee-reverse: əks hərəkət istiqaməti.
        motion-reduce: istifadəçinin animasiyaları azaltma seçiminə hörmət edir.
        group-hover: siçan konteynerin üzərinə gəldikdə animasiyanı dayandırır.
      */}
      <div
        className={`my-2 flex w-max motion-reduce:animate-none group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {/* Loqo siyahısını ekrana çıxarır */}
        {items.map((logo, i) => (
          <div key={`${logo.id}-${i}`} className="px-8 max-[1000px]:px-5">
            {/* 
              Loqo üçün sabit ölçülü konteyner.
              opacity və grayscale: ilkin vəziyyətdə loqolar solğun və boz görünür.
              hover: üzərinə gəldikdə loqo böyüyür, rəngli və tam görünən olur.
            */}
            <div className="relative h-14 w-36 opacity-50 grayscale transition-all duration-500 hover:scale-110 hover:opacity-100 hover:grayscale-0 max-[1000px]:h-10 max-[1000px]:w-28">
              <Image
                src={logo.imgUrl}
                alt={`${logo.name} loqosu`}
                fill
                unoptimized
                sizes="144px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Brendlər bölməsinin əsas komponenti
const BrandsSection = () => {
  // Loqoların sayını iki sətrə bölmək üçün orta indeks hesablanır.
  // Math.ceil: tək say olduqda artıq element birinci sətrə düşür.
  const half = Math.ceil(partner_logos.length / 2);

  // Birinci sətrə aid loqolar
  const rowOne = partner_logos.slice(0, half);

  // İkinci sətrə aid loqolar
  const rowTwo = partner_logos.slice(half);

  return (
    <section className="py-12 max-[1000px]:py-8">
      {/* Bölmənin başlıq və tərəfdaş sayını göstərən üst hissəsi */}
      <SectionHeadingComponent
        title="Bizə etibar edən brendlər"
        description="Enerji və sənaye sektorunun aparıcı şirkətləri illərdir ki, ölçmə və nəzarət həllərində bizimlə işləyir."
        count={partner_logos.length}
        label="tərəfdaş brend"
      />

      {/* 
        İki hərəkətli loqo sətrini özündə birləşdirən konteyner.
        border-y: yuxarı və aşağı sərhəd.
        rowOne: normal istiqamətdə hərəkət edir.
        rowTwo: əks istiqamətdə hərəkət edir.
      */}
      <div className="flex flex-col gap-6 border-y border-gray-200 py-8 max-[1000px]:gap-4 max-[1000px]:py-5">
        <MarqueeRow logos={rowOne} />
        <MarqueeRow logos={rowTwo} reverse />
      </div>
    </section>
  );
};

export default BrandsSection;
