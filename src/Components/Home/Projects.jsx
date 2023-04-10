import styles from "./Projects.module.scss";
import carImg from "../../../public/car.png";
import uaStore from "../../../public/uaStore.png";
import filmProject from "../../../public/filmProject.png";
import convertor from "../../../public/convertor.png";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="Projects" className={styles.Projects}>
      <h2 className={styles.h2Project}> Projects What I`ve built</h2>
      <div className={styles.ItemBlock}>
        <div className={styles.item}>
          <Image
            className={styles.img}
            src={carImg}
            alt="/"
            width={530}
            height={320}
          />
          <div className={styles.projectImgText}>
            <Link
              className={styles.hoverBtn}
              href="https://car-web.vercel.app/"
              target="_blank"
            >
              To project
            </Link>
            <h3 className={styles.HoverH3}>DIM car</h3>
            <p className={styles.HoverText}>
              Next.js project with authentication by socials and cart.
              Animations and MUI themes.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            className={styles.img}
            src={uaStore}
            alt="/"
            width={530}
            height={320}
          />
          <div className={styles.projectImgText}>
            <Link
              className={styles.hoverBtn}
              href="https://d1mkadon.github.io/UA-store/"
              target="_blank"
            >
              To project
            </Link>
            <h3 className={styles.HoverH3}>UA store</h3>
            <p className={styles.HoverText}>React.js project</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            className={styles.img}
            src={filmProject}
            alt="/"
            width={530}
            height={320}
          />
          <div className={styles.projectImgText}>
            <Link
              className={styles.hoverBtn}
              href="https://d1mkadon.github.io/films/"
              target="_blank"
            >
              To project
            </Link>
            <h3 className={styles.HoverH3}>Searching films</h3>
            <p className={styles.HoverText}>React.js project, IMDB api, MUI</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            className={styles.img}
            src={convertor}
            alt="/"
            width={530}
            height={320}
          />
          <div className={styles.projectImgText}>
            <Link
              className={styles.hoverBtn}
              href="https://codesandbox.io/s/currency-converter-tibplz"
              target="_blank"
            >
              To project
            </Link>
            <h3 className={styles.HoverH3}>Currency convertor</h3>
            <p className={styles.HoverText}>React.js project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
