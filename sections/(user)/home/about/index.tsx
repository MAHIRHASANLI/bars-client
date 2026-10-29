import SubheadingComponent from "@/components/(user)/shared/section_heading_component";

const brands = [
  "NUMBER ONE",
  "Elster",
  "Siqnal",
  "FMG",
  "Baypa",
  "Tork",
  "Madas",
  "Aterma",
];

const advantages = [
  {
    title: "Rəsmi nümayəndəlik",
    text: "BARS səkkiz brendin Azərbaycandakı rəsmi nümayəndəsidir. Məhsulların idxalını özümüz təşkil edirik, buna görə də aldığınız məhsulun mənşəyinə əmin ola bilərsiniz.",
  },
  {
    title: "Geniş çeşid",
    text: "Yapışdırıcı və silikonlardan sayğac, tənzimləyici və detektorlara qədər qaz, su və tikinti sahələri üçün lazım olan məhsulları bir yerdən əldə edirsiniz.",
  },
  {
    title: "Satış və servis",
    text: "Biz yalnız məhsul satmırıq. Satışdan sonra da servis xidməti göstəririk və texniki suallarınızı cavablandırırıq.",
  },
];

const catalog = [
  {
    name: "Yapışdırıcılar",
    desc: "Qranit daş və mərmər, divar kağızı və PVC-U boru yapışdırıcıları",
  },
  {
    name: "Silikonlar",
    desc: "Tikinti və təmir işlərində birləşmələrin möhkəm və hermetik olması üçün",
  },
  {
    name: "Sayğaclar",
    desc: "Qaz və suyun sərfinin dəqiq uçotu üçün",
  },
  {
    name: "Tənzimləyicilər",
    desc: "Xətlərdə təzyiqin sabit və təhlükəsiz saxlanması üçün",
  },
  {
    name: "Siqnal cihazları və detektorlar",
    desc: "Mühitin təhlükəsizliyinə nəzarət və xəbərdarlıq üçün",
  },
  {
    name: "Flanşlar",
    desc: "Boru xətlərinin etibarlı birləşdirilməsi üçün",
  },
];

const steps = [
  "Məhsul çeşidi ilə tanış olun və ya bizə zəng edib ehtiyacınızı deyin.",
  "Mütəxəssisimiz uyğun brendi və modeli seçməyinizə kömək edəcək.",
  "Sifarişin detallarını, ödəniş və çatdırılma üsulunu təsdiqləyin.",
  "Məhsulu ünvanınıza çatdırırıq və ya ofisimizdən təhvil alırsınız.",
];

const faq = [
  {
    q: "BARS hansı brendlərin rəsmi nümayəndəsidir?",
    a: "BARS Azərbaycanda NUMBER ONE, Elster, Siqnal, FMG, Baypa, Tork, Madas və Aterma şirkətlərinin rəsmi nümayəndəsidir və bu brendlərin məhsullarının idxalını və satışını təşkil edir.",
  },
  {
    q: "BARS hansı məhsulları satır?",
    a: "Qaz, su və kimyəvi yapışdırıcı məhsulları: qranit daş və mərmər yapışdırıcıları, silikonlar, divar kağızı yapışdırıcıları, PVC-U boru yapışdırıcısı, sayğaclar, tənzimləyicilər, siqnal cihazları, flanşlar, detektorlar və digər məhsullar.",
  },
  {
    q: "Servis xidməti göstərirsinizmi?",
    a: "Bəli. Məhsulların satışı ilə yanaşı onların servisini də həyata keçiririk.",
  },
  {
    q: "Rəsmi nümayəndədən almağın üstünlüyü nədir?",
    a: "Rəsmi nümayəndə məhsulları birbaşa istehsalçı brendlərdən gətirir və həmin məhsullar üzrə məsləhət verə bilir. Bu, həm məhsulun orijinallığına, həm də düzgün seçimə əminlik yaradır.",
  },
];

const AboutSection = () => {
  return (
    <section
      aria-labelledby="about-title"
      className="py-8 mx-auto w-full m-2 max-[800px]:p-5"
    >
      {/* Giriş */}
      <SubheadingComponent
        title="Qaz, su və yapışdırıcı məhsullarının rəsmi nümayəndəsi"
        description={`BARS Mağazası 2024-cü ildə qurulub və yarandığı gündən müştərilərə müasir tələblərə cavab verən məhsullar və xidmətlər təklif edir. Məqsədimiz ən keyfiyyətli məhsulları ən münasib qiymətlə təqdim etməklə müştəri məmnuniyyətini qazanmaqdır. Bu missiyanı uğurla yerinə yetirdiyimiz üçün qürur duyuruq. Şirkətimiz qaz, su və kimyəvi yapışdırıcı məhsullarının satışını və servisini həyata keçirir. Mütəxəssislərimiz ehtiyacınıza uyğun məhsul seçməyinizə və texniki suallarınızı cavablandırmağa hazırdır.`}
      />

      {/* Brendlər */}
      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label="Rəsmi nümayəndəsi olduğumuz brendlər"
      >
        {brands.map((brand) => (
          <li
            key={brand}
            className="rounded-full bg-[#f5f5f7] px-4 py-2 text-sm font-medium text-[#1d1d1f]"
          >
            {brand}
          </li>
        ))}
      </ul>

      {/* Üstünlüklər */}
      <br />
      <SubheadingComponent
        title="BARS-ın üstünlükləri"
        description={`Rəsmi nümayəndə kimi məhsulları birbaşa brendlərdən gətiririk və hər sifarişdə eyni məsuliyyətlə çalışırıq. Bizdən alış-veriş etməyin əsas üstünlükləri bunlardır:`}
      />

      <ul className="mt-5 grid grid-cols-3 gap-3 max-[800px]:grid-cols-1">
        {advantages.map((item) => (
          <li key={item.title} className="rounded-2xl bg-[#f5f5f7] p-5">
            <h4 className="text-base font-semibold text-[#1d1d1f]">
              {item.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-(--secondary-color)">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      {/* Daha çox */}
      <details className="group mt-8">
        <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1f] [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden underline">Daha çox</span>
          <span className="hidden group-open:inline underline">Daha az</span>
        </summary>

        <div className="mt-8 space-y-10">
          {/* Məhsul çeşidi */}
          <div>
            <SubheadingComponent
              title="BARS-da məhsul çeşidi"
              description="Çeşidimiz həm təmir və tikinti, həm də qaz və su sistemləri üçün lazım olan əsas məhsulları əhatə edir."
            />

            <dl className="mt-5 divide-y divide-black/[0.06] overflow-hidden rounded-2xl ring-1 ring-black/[0.06]">
              {catalog.map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-[1fr_2fr] gap-4 px-5 py-4 max-[800px]:grid-cols-1 max-[800px]:gap-1"
                >
                  <dt className="text-sm font-semibold text-[#1d1d1f]">
                    {row.name}
                  </dt>
                  <dd className="text-sm text-(--secondary-color)">
                    {row.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Niyə rəsmi nümayəndə */}

          <div>
            <SubheadingComponent
              title="Niyə rəsmi nümayəndədən almağa dəyər?"
              description=""
            />
            <div className="mt-2 max-w-3xl space-y-3 text-base leading-relaxed text-(--secondary-color) max-[800px]:text-sm">
              <p>
                Qaz və su sistemlərində məhsulun keyfiyyəti birbaşa
                təhlükəsizliyə təsir edir. Sayğac, tənzimləyici və ya detektor
                seçərkən düzgün modeli bilmək və məhsulun orijinal olduğuna əmin
                olmaq vacibdir. Rəsmi nümayəndə kimi biz bu brendlərin
                məhsullarını yaxşı tanıyırıq və seçim zamanı sizə konkret
                məsləhət verə bilirik.
              </p>
              <p>
                Yapışdırıcı və silikonlarda da eyni qayda keçərlidir: düzgün
                seçilmiş material işin nəticəsini və davamlılığını müəyyən edir.
                Hansı səthdə hansı məhsuldan istifadə etməyin daha doğru
                olduğunu mütəxəssislərimizdən soruşa bilərsiniz.
              </p>
            </div>
          </div>

          {/* Sifariş necə */}
          <div>
            <SubheadingComponent
              title="Sifarişi necə rəsmiləşdirmək olar?"
              description="Proses sadədir və bir neçə addımdan ibarətdir:"
            />
            <ol className="mt-4 space-y-3">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-sm font-semibold text-[#b64400]">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-(--secondary-color) max-[800px]:text-xs">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          <div>
            <SubheadingComponent
              title="Tez-tez verilən suallar "
              description=""
            />
            <div className="mt-4 divide-y divide-black/[0.06] rounded-2xl ring-1 ring-black/[0.06]">
              {faq.map((item) => (
                <details key={item.q} className="group/faq px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#1d1d1f] [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="text-xl leading-none text-(--secondary-color) transition-transform duration-200 group-open/faq:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-(--secondary-color)">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </details>
    </section>
  );
};

export default AboutSection;
