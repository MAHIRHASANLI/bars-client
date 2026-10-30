
const CountBadgeComponent = ({ children }: { children: number }) => {
  return (
    <span className="absolute left-2.5 top-2.5 z-10 flex w-4 h-4 items-center justify-center rounded-full bg-(--logo-color) text-[9px] font-semibold text-white">
      {children}
    </span>
  );
};

export default CountBadgeComponent;
