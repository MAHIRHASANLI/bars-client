import PageHeading from "../page_heading_component_h1";

// Bölmə başlığı və statistik məlumat üçün Props
type SectionHeadingComponentProps = {
  title: string;
  description: string;
  count: number;
  label: string;
};

const SectionHeadingComponent = ({
  title,
  description,
  count,
  label,
}: SectionHeadingComponentProps) => {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 max-[1000px]:mb-6 max-[1000px]:flex-col max-[1000px]:items-start">
      {/* Bölmənin başlığı və açıqlaması */}
      <div className="flex max-w-xl flex-col gap-3">
        <PageHeading title={title} description={description} />
      </div>

      {/* Statistik göstərici */}
      <div className="flex items-baseline gap-3">
        <span className="text-7xl font-extrabold leading-none text-gray-900 max-[1000px]:text-5xl">
          {count}+
        </span>

        <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
          {label}
        </span>
      </div>
    </div>
  );
};

export default SectionHeadingComponent;