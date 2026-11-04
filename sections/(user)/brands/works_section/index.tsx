"use client";

import { useState } from "react";
import Image from "next/image";
import img from "@/images/isupport-first-section.jpg";
import img1 from "@/images/260911100016384144.webp";
import SectionHeading from "@/components/(user)/shared/section_heading_component_h2";
// NÜMUNƏ məlumatlar: real işləri, şəkilləri və rəqəmləri özün əvəz et
const works = [
  {
    id: 1,
    company: "SOCAR",
    title: "Qaz sayğaclarının təmiri və kalibrasiyası",
    description:
      "Müxtəlif obyektlərdəki sənaye qaz sayğaclarının diaqnostikası, təmiri və dəqiqlik yoxlaması aparılıb.",
    year: "2024",
    image: img1,
    stats: [
      { value: "350+", label: "sayğac" },
      { value: "99.8%", label: "dəqiqlik" },
      { value: "14 gün", label: "müddət" },
    ],
  },
  {
    id: 2,
    company: "Honeywell",
    title: "Ölçü cihazlarının servis xidməti",
    description:
      "Avadanlıqların planlı texniki baxışı və itkilərin azaldılması üçün yenidən tənzimlənməsi həyata keçirilib.",
    year: "2023",
    image: img,
    stats: [
      { value: "120+", label: "cihaz" },
      { value: "30%", label: "itki azalması" },
      { value: "3 ay", label: "müddət" },
    ],
  },
  {
    id: 3,
    company: "Siemens",
    title: "Avtomatlaşdırma sistemlərinin yenilənməsi",
    description:
      "Mövcud ölçmə sisteminin müasir nəzarət avadanlığı ilə inteqrasiyası və işə salınması.",
    year: "2023",
    image: img1,
    stats: [
      { value: "8", label: "obyekt" },
      { value: "24/7", label: "monitorinq" },
      { value: "2 ay", label: "müddət" },
    ],
  },
  {
    id: 4,
    company: "Danfoss",
    title: "İstilik sayğaclarının quraşdırılması",
    description:
      "Bina və obyektlərdə istilik enerjisi uçotu üçün sayğacların seçilməsi, quraşdırılması və sazlanması.",
    year: "2022",
    image: img,
    stats: [
      { value: "200+", label: "quraşdırma" },
      { value: "12", label: "obyekt" },
      { value: "4 ay", label: "müddət" },
    ],
  },
];

const WorksSection = () => {
  const [activeId, setActiveId] = useState(works[0].id);
  const active = works.find((w) => w.id === activeId) ?? works[0];

  return (
    <section className="py-12 max-[1000px]:py-8">
      {/* Üst hissə */}
      <div className="mb-10 flex max-w-xl flex-col gap-3 max-[1000px]:mb-6">
        <SectionHeading title="Gördüyümüz işlər" description="Tərəfdaşlarımız üçün həyata keçirdiyimiz layihələrdən bəziləri." />
      </div>

      <div className="grid grid-cols-[1fr_1.15fr] items-start gap-12 max-[1000px]:grid-cols-1 max-[1000px]:gap-8">
        {/* Sol: layihə siyahısı */}
        <ul className="flex flex-col border-t border-gray-200">
          {works.map((work, index) => {
            const isActive = work.id === activeId;
            return (
              <li key={work.id} className="border-b border-gray-200">
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(work.id)}
                  onFocus={() => setActiveId(work.id)}
                  onClick={() => setActiveId(work.id)}
                  aria-pressed={isActive}
                  className="group relative flex w-full items-center gap-5 py-6 text-left max-[1000px]:gap-4 max-[1000px]:py-4"
                >
                  {/* Hərəkət edən xətt */}
                  <span
                    className={`absolute left-0 top-0 h-full w-0.5 origin-top bg-gray-900 transition-transform duration-500 ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <span
                    className={`pl-4 text-sm font-semibold tabular-nums transition-colors duration-300 ${
                      isActive ? "text-gray-900" : "text-gray-300"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex flex-1 flex-col gap-1">
                    <span
                      className={`text-2xl font-bold transition-all duration-300 max-[1000px]:text-xl ${
                        isActive
                          ? "translate-x-1 text-gray-900"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    >
                      {work.company}
                    </span>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        isActive ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {work.title}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className={`pr-2 text-xl transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-gray-900 opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Sağ: önizləmə */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200">
            {works.map((work) => (
              <Image
                key={work.id}
                src={work.image}
                alt={`${work.company} layihəsi`}
                fill
                sizes="(max-width: 1000px) 100vw, 50vw"
                className={`object-cover transition-all duration-700 ${
                  work.id === activeId
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}

            {/* İl nişanı */}
            <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {active.year}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            {active.description}
          </p>

          {/* Nəticə rəqəmləri */}
          <dl className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-5">
            {active.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs uppercase tracking-wider text-gray-400">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-extrabold text-gray-900 max-[1000px]:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;