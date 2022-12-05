import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProjectCardList } from "../components/ProjectCardList";
import { Project } from "../components/types";
import projectsJson from "../projects.json";

const Home: NextPage = () => {
  const projects: Project[] = projectsJson;
  return (
    <div className="dark">
      <div className='relative dark:bg-black dark:text-white'>
        <Head>
          <title>Ige Ayodeji&apos;s portfolio</title>
          <meta name='description' content="Ige Ayodeji's portfolio" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <Hero />
        <section id='works' className='page-side-padding py-8'>
          <ProjectCardList projects={projects} />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
