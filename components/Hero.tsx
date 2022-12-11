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
      "block h-[1.2em] overflow-hidden" + (containerClassName ? " " + containerClassName : "")
    }>
    <span
      className={"block translate-y-full animate-slide-in text-black/80 dark:text-white/80" + (className ? " " + className : "")}>
      {children}
    </span>
  </span>
);

const EmSpan = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={"text-[1.1em] font-medium text-black dark:text-white" + (className ? " " + className : "")}>
    {children}
  </span>
);

export const Hero = () => {
  return (
    <section className='flex items-center justify-center md:h-[calc(100vh-theme(height.24))] py-4 page-side-padding w-full'>
      <div className='max-w-4xl w-full'>
        <h1 className='hero-quote text-2xl md:text-4xl lg:text-6xl leading-snug font-serif overflow-hidden'>
          <TitleLine>A great product doesn&apos;t </TitleLine>
          <TitleLine className='[animation-delay:300ms]'>
            only <EmSpan>solve problems</EmSpan>, but{" "}
          </TitleLine>
          <TitleLine className='[animation-delay:600ms]'>
            It also creates an <EmSpan>easy</EmSpan> and{" "}
          </TitleLine>
          <TitleLine className='[animation-delay:900ms]'>
            enjoyable <EmSpan>user experience</EmSpan>.
          </TitleLine>
        </h1>
        <TitleLine className='md:text-lg [animation-delay:1200ms]' containerClassName='h-[1.45em]'>
          — Ige Ayodeji, Product Designer.
        </TitleLine>
      </div>
    </section>
  );
};
