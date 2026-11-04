import SectionHeadingComponent from "@/components/(user)/shared/heading_section_component";

const MainBranchesSection = () => {
  return (
    <section className="py-8 pb-2">
      <SectionHeadingComponent
        title="Filial seçin"
        description="Sizə ən yaxın filialımızı seçərək ünvan və əlaqə məlumatları ilə tanış ola bilərsiniz."
        count={3}
        label="filial"
      />
    </section>
  );
};

export default MainBranchesSection;
