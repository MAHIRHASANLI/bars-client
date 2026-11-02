import { StoreType } from "@/types/links";
import InfoComponent from "../branch_list_info";

const linkClass = "font-medium text-[#1a73e8] no-underline hover:underline";

const BranchMapComponent = ({ selected }: { selected: StoreType }) => {
  // iframe və istiqamət üçün yerin adı, yoxdursa ünvan
  const query = encodeURIComponent(
    selected.mapQuery ?? `${selected.address}, Bakı`,
  );

  const src = `https://www.google.com/maps?q=${query}&hl=az&z=16&output=embed`;
  const placeUrl =
    selected.mapUrl ??
    `https://www.google.com/maps/search/?api=1&query=${query}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <div className="relative h-full min-h-150 w-full overflow-hidden bg-(--img-bg-color) rounded-xl">
      <iframe
        key={selected.id}
        title={`${selected.name} xəritə`}
        src={src}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Marker üzərindəki məlumat pəncərəsi */}
      <div className="absolute bottom-[calc(50%+46px)] left-1/2 w-[min(420px,calc(100%-24px))] -translate-x-1/2">
        <div className="relative rounded-lg bg-white p-5 text-black shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          <InfoComponent store={selected} placeUrl={placeUrl} />
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className={`${linkClass} mt-4 inline-flex items-center gap-1`}
          >
            İstiqamətləri əldə edin
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>

          {/* Aşağıya baxan ox */}
          <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.15)]" />
        </div>
      </div>
    </div>
  );
};

export default BranchMapComponent;