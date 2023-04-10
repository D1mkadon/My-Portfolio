import Icon from "../Icon";
import { iconTypes } from "../constants/icons";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div id="About" className={styles.about}>
      <h2 className={styles.AboutH2}>About</h2>
      <div className={styles.projectsBlock}>
        <div className={styles.project}>
          <div className={styles.projectIcon}>
            <Icon type={iconTypes.gerb} width={"50px"} height={"50px"} />
          </div>
          <h2 className={styles.AboutTitle}> Ukranian</h2>
          <p className={styles.AboutDescription}>
            From Kiyv <br /> 22 y.o. <br /> Currently leaving in
            Lohne(Oldenburg) Germany
            <br /> Work Permit in European Union
          </p>
        </div>
        <div className={styles.project}>
          <div className={styles.projectIcon}>
            <Icon type={iconTypes.education} width={"50px"} height={"50px"} />
          </div>
          <h2 className={styles.AboutTitle}>Education </h2>
          <p className={styles.AboutDescription}>
            Finished high school <br />
            Finished IT courses CyberBionic Systematics as React Front-end
          </p>
          <h2 className={styles.AboutTitle}>Languages </h2>
          <p className={styles.AboutDescription}>
            Ukrainian - Native <br />
            English - C1 or B2 <br />
            Germany - A1
          </p>
        </div>
        <div className={styles.project}>
          <div className={styles.projectIcon}>
            <Icon type={iconTypes.sociality} width={"50px"} height={"50px"} />
          </div>
          <h2 className={styles.AboutTitle}> Soft skills</h2>
          <p className={styles.AboutDescription}>
            Communication <br /> Teamwork <br /> Problem-solving <br />{" "}
            Organizational <br />
            Adaptability <br />
            Conflict management <br /> Willingness to learn <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
