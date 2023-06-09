import styles from "./HomePage.module.scss";
import Head from "next/head";
import NavBar from "./NavBar";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Dmytro Tarasenko</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myicon.ico" />
      </Head>
      <div className={styles.Container}>
        <NavBar />
        <div className={styles.divider} />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
