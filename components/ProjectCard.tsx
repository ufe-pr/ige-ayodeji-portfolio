import Image from "next/image";
import { Project } from "./types";

export const ProjectCard = ({ image, imageAlt, title, subtitle, link }: Project) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" >
      <div className='h-[calc((100vw-theme(padding.5))*9/16)] md:h-[calc((100vw/2_-_theme(padding.5)*2)*9/16)] lg:h-64 overflow-hidden'>
        <picture>
          <img src={image} alt={imageAlt ?? ""} />
        </picture>
      </div>
      <h3 className='text-2xl mt-2 font-medium leading-snug'>{title}</h3>
      <h6 className='leading-normal opacity-80'>{subtitle}</h6>
    </a>
  );
};
