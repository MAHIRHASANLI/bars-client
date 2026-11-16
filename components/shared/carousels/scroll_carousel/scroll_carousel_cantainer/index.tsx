import { twMerge } from "tailwind-merge";
import DragScroll from "../add_scroll";

const presets = {
  compact: [
    "[--n:2] [--gap:10px]",
    "min-[360px]:[--n:3.2]",
    "min-[640px]:[--n:4.3] min-[640px]:[--gap:20px]",
    "min-[800px]:[--n:5.5] min-[800px]:[--gap:60px]",
    "min-[1024px]:[--n:6.5] min-[1024px]:[--gap:50px]",
    "min-[1280px]:[--n:7.5] min-[1280px]:[--gap:30px]",
  ].join(" "),
  wide: [
    "[--n:1.2] [--gap:10px]",
    "min-[640px]:[--gap:20px]",
    "min-[800px]:[--n:2]",
    "min-[1024px]:[--n:3] min-[1024px]:[--gap:30px]",
    "min-[1280px]:[--n:4] min-[1280px]:[--gap:25px]",
  ].join(" "),
  extraWide: [
  "[--n:3] [--gap:10px]",
  "min-[480px]:[--n:2.5] min-[480px]:[--gap:15px]",
  "min-[640px]:[--n:2.5] min-[640px]:[--gap:20px]",
  "min-[800px]:[--n:3]",
  "min-[1024px]:[--n:4] min-[1024px]:[--gap:25px]",
  "min-[1280px]:[--n:7] min-[1280px]:[--gap:20px]",
].join(" "),
  single: "[--n:1] [--gap:20px]",
} as const;

type Props = {
  children: React.ReactNode;
  preset?: keyof typeof presets;
  className?: string;
};

const ScrollCarouselComponent = ({
  children,
  preset = "wide",
  className,
}: Props) => {
  return (
<div
  className={twMerge(
    // sağda ekranın kənarına qədər uzanır, sonda konteynerlə düz xəttdə dayanır
    "mr-[calc((100%-100vw)/2)] pr-[calc((100vw-100%)/2)]",
    // sol və ymr-[calc((100%-100vw)/2)] pr-uxarı/aşağı kölgələr kəsilməsin
    "-ml-6 pl-6 scroll-pl-6 -my-6 py-6",
    "flex snap-x snap-mandatory gap-(--gap) overflow-x-auto overscroll-x-contain scroll-smooth",
    "scrollbar-none [&::-webkit-scrollbar]:hidden",
    presets[preset],
    "*:shrink-0 *:snap-start *:basis-[calc((100%-(var(--n)-1)*var(--gap))/var(--n))]",
    className
  )}
>
    <DragScroll />
  {children}
</div>
  );
};

export default ScrollCarouselComponent;