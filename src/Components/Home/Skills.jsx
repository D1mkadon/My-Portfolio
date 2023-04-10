import styles from "./Skills.module.scss";
const Skills = () => {
  const skills = [
    {
      name: "Next.js",
      img: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    },
    {
      name: "React.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "JavaScript",
      img: "https://logosdownload.com/logo/javascript-logo-512.png",
    },
    {
      name: "SCSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    },
    {
      name: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png",
    },
    {
      name: "HTML",
      img: "https://img.freepik.com/free-icon/html5_318-903450.jpg?w=2000",
    },
    {
      name: "ES6",
      img: "https://live.staticflickr.com/7306/16407404782_8b9c57eab3_w.jpg",
    },
    {
      name: "Github",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      name: "MUI",
      img: "https://mui.com/static/logo.png",
    },
    {
      name: "Framer",
      img: "https://raw.githubusercontent.com/github/explore/59cede78452a07c6dd0c522d92c1073f7b5f8dea/topics/framer-motion/framer-motion.png",
    },
    {
      name: "Axios",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png",
    },

    {
      name: "Webpack",
      img: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
    },
  ];
  return (
    <div id="Skills" className={styles.Skills}>
      <h2 className={styles.h2Project}>Skills </h2>
      <div className={styles.skillsBlock}>
        {skills.map((e) => (
          <div key={e.name}>
            <img
              style={{ width: 50, height: 50, objectFit: "contain" }}
              src={e.img}
              alt="/"
            />
            <p>{e.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
