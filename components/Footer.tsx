import { Logo } from "./Logo";

const SocialIcon = ({ name, link }: { name?: string; link: string }) => {
  return (
    <a href={link} className='mr-4 last:mr-0'>
      {name}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className='page-side-padding py-8 md:py-12 bg-slate-300/30'>
      <div className='max-w-4xl w-full mx-auto flex items-center justify-center'>
        <Logo />
      </div>
      <div className='mt-5 max-w-4xl w-full mx-auto text-center'>
        <SocialIcon link='' name='Twitter' />
        <SocialIcon link='' name='Dribble' />
        <SocialIcon link='' name='Medium' />
      </div>
    </footer>
  );
};
