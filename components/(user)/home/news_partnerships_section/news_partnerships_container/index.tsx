interface AuxProps {
  children: React.ReactNode;
  // Kontent DOM-da birinci gəlirsə, kiçik ekranda sıranı çevirir (şəkil yuxarıda qalır)
  reverseOnMobile?: boolean;
}

const NewsPartnershipsItem = (props: AuxProps) => {
  const { children, reverseOnMobile = false } = props;
  return (
    <div
      className={`flex ${
        reverseOnMobile ? "flex-col-reverse" : "flex-col"
      } min-[1000px]:grid min-[1000px]:grid-cols-2 bg-(--main-color) rounded-2xl overflow-hidden shadow-[0px_2px_8px_0px_rgba(99,99,99,0.1)]`}
    >
      {children}
    </div>
  );
};

export default NewsPartnershipsItem;