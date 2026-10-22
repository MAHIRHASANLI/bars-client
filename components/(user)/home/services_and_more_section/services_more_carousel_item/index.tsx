import { ServiceType } from "@/sections/(user)/home/services_and_more_section";
import Link from "next/link";
import React from "react";
type Tone = "neutral" | "blue" | "green" | "orange";
// Tailwind class-ları tam yazılmalıdır (dinamik birləşdirmə işləməz)
const toneClasses: Record<Tone, string> = {
  neutral: "text-(--color-tone-neutral)",
  blue: "text-(--color-tone-blue)",
  green: "text-(--color-tone-green)",
  orange: "text-(--color-tone-orange)",
};

const ServicesMoreCarouselItem = ({ service }: { service: ServiceType }) => {
  const color = toneClasses[service.tone];

  return (
    <div className="max-w-73 h-44 p-4 rounded-2xl overflow-hidden transition-all max-[1000px]:max-w-full! duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.125)] hover:shadow-[0px_2px_8px_0px_rgba(99,99,99,0.3)]">
      <Link href="">
        <div>
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-wider leading-3 mb-2 ${color}`}
            >
              {service.label}
            </p>
          </div>
          <h3 className="mt-2 line-clamp-4 text-2xl font-semibold leading-tight text-black">
            {service.title.map((part, i) => (
              <span key={i} className={part.accent ? color : undefined}>
                {part.text}
              </span>
            ))}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ServicesMoreCarouselItem;
