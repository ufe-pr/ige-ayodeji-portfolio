import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProjectCardList } from "../components/ProjectCardList";
import { Project } from "../components/types";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const projects: Project[] = [
    {
      title: "CollarGig",
      subtitle: "Freelancers Gig Platform",
      image: "https://tayotane.netlify.app/Resources/img/Works/Collargig.png",
      imageAlt: "Screenshot of homepage",
    },
    {
      title: "CollarGig",
      subtitle: "Freelancers Gig Platform",
      image: "https://tayotane.netlify.app/Resources/img/Works/Collargig.png",
      imageAlt: "Screenshot of homepage",
    },
    {
      title: "CollarGig",
      subtitle: "Freelancers Gig Platform",
      image: "https://tayotane.netlify.app/Resources/img/Works/Collargig.png",
      imageAlt: "Screenshot of homepage",
    },
    {
      title: "CollarGig",
      subtitle: "Freelancers Gig Platform",
      image: "https://tayotane.netlify.app/Resources/img/Works/Collargig.png",
      imageAlt: "Screenshot of homepage",
    },
  ];
  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <meta name='description' content="Ige Ayodeji's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <section className='page-side-padding py-8'>
        <ProjectCardList projects={projects} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
