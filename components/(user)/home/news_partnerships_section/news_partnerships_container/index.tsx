interface AuxProps {
  children: React.ReactNode;
}

const NewsPartnershipsItem = (props: AuxProps) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-1 min-[801px]:grid-cols-2 bg-(--main-color) rounded-2xl overflow-hidden shadow-[0px_2px_8px_0px_rgba(99,99,99,0.1)]">
      {children}
    </div>
  );
};

export default NewsPartnershipsItem;
