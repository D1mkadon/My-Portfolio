import Link from "next/link";
import styles from "./NavBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleStop = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.Head} id="Head">
      <header className={styles.header}>
        <Link href="/">Home</Link>
        <Link href="/#About">About</Link>
        <Link href="/#Skills">Skills</Link>
        <Link href="/#Projects">Projects</Link>
        <Link href="/#Contact">Contact</Link>
      </header>
      <div onClick={handleNav} className={nav ? styles.burgerDiv : null}>
        <div
          onClick={handleStop}
          className={nav ? styles.BurgerMain : styles.Left}
        >
          <div className={styles.BurgerHeader}>
            <h3 className={styles.h3Burger}>Dmytro Tarasenko</h3>
            <div className={styles.xMark} onClick={handleNav}>
              <CloseIcon
                sx={{ fontSize: 30, position: "relative", top: "5px" }}
              />
            </div>
          </div>
          {/* <div className={styles.BurgerHeadDivider}>
            <p className={styles.BurgerTextP}>Let`s change this World!</p>
          </div> */}
          <div onClick={handleStop} className={styles.BurgerNavBlock}>
            <Link href="/">Home</Link>
            <Link href="/#About">About</Link>
            <Link href="/#Skills">Skills</Link>
            <Link href="/#Projects">Projects</Link>
            <Link href="/#Contact">Contact</Link>
          </div>
          <div onClick={handleStop}>
            <p style={{ marginBottom: "5px" }}>Let`s connect</p>
            <div className={styles.Socials}>
              <div>
                <Link href="mailto:dt8157970@gmail.com" target="_blank">
                  <MailOutlineIcon className={styles.Icons} />
                </Link>
              </div>
              <div>
                <Link href="https://github.com/D1mkadon" target="_blank">
                  <GitHubIcon className={styles.Icons} />
                </Link>
              </div>
              <div>
                <Link
                  href="https://www.linkedin.com/in/dmytro-tarasenko/"
                  target="_blank"
                >
                  <LinkedInIcon className={styles.Icons} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleNav} className={styles.burgerMenu}>
        <MenuIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
};

export default NavBar;
