import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className='page-side-padding py-8 md:py-12 bg-slate-300/30'>
      <div className='max-w-4xl w-full mx-auto flex items-center justify-center'>
        <Logo />
      </div>
      <div className='max-w-4xl w-full mx-auto'></div>
    </footer>
  );
};
