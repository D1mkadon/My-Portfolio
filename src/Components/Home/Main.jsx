import Image from "next/image";
import styles from "./HomePage.module.scss";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
const Main = () => {
  return (
    <div id="Welcome" className={styles.welcome}>
      <Image
        className={styles.myImg}
        src={"/myicon.png"}
        alt="/"
        width={150}
        height={150}
      />
      <h3 className={styles.projectImgText}>DIM Car</h3>
      <span className={styles.underPhotoText}>Hi, I`m Dmytro Tarasenko</span>
      <h1 className={styles.h1}>
        Frontend developer
        <br />
        React.Js <br /> Next.Js
      </h1>
      <Link
        className={styles.GitLink}
        href={"https://github.com/D1mkadon"}
        target="_blank"
      >
        Github
        <GitHubIcon
          sx={{ position: "relative", top: "5px", fontSize: "24px" }}
        />
      </Link>
    </div>
  );
};

export default Main;
