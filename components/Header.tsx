import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className='page-side-padding h-24 z-10 flex items-center bg-white dark:bg-black sticky top-0'>
      <nav className='w-full max-w-4xl mx-auto flex justify-between items-center'>
        <Logo />
      </nav>
    </header>
  );
};
