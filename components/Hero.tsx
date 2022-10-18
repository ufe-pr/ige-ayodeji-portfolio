import { ReactNode } from "react";

const TitleLine = ({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) => (
  <span
    className={
      "block h-[1.375em] overflow-hidden" + (containerClassName ? " " + containerClassName : "")
    }>
    <span className={"block translate-y-full animate-slide-in" + (className ? " " + className : "")}>
      {children}
    </span>
  </span>
);

export const Hero = () => {
  return (
    <section className='flex items-center justify-center md:h-[calc(100vh-theme(height.24))] py-4 page-side-padding w-full'>
      <div className='max-w-4xl w-full'>
        <h1 className='hero-quote text-3xl md:text-6xl lg:text-8xl leading-snug font-serif overflow-hidden'>
          <TitleLine>If the idea is not </TitleLine>
          <TitleLine className="[animation-delay:300ms]">solving a problem, </TitleLine>
          <TitleLine className="text-[1.1em] font-medium [animation-delay:600ms]">the UX will</TitleLine>
        </h1>
        <TitleLine className='md:text-lg [animation-delay:900ms]'>— Ige Ayodeji, Product Designer.</TitleLine>
      </div>
    </section>
  );
};
