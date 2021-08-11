import PageHeader from "../PageHeader/PageHeader";
import classes from "./Projects.module.css";
import calculator from "../Images/calculator.png";
import ceaserCipher from "../Images/ceaserCipher.png";
import quiz from "../Images/quiz.png";
import groupProj from "../Images/GroupProj.png";
import weather from "../Images/weather.png";

const calculatorDescription = "Created a calculator using React:";
const calculatorLink = "https://markh1089.github.io/React-Calculator/";
const calculatorCode = "https://github.com/markh1089/React-Calculator.git";

const weatherDescription =
  "Created a weather app using the OpenWeatherMap API:";
const weatherLink = "https://markh1089.github.io/WeatherApi/";
const weatherCode = "https://github.com/markh1089/WeatherApi";

const quizDescription =
  "A Javascript quiz based on the validity of various news headlines:";
const quizLink = "https://markh1089.github.io/Quiz-v.2/";
const quizCode = "https://github.com/markh1089/Quiz-v.2.git";

const ceaserCipherDescription =
  "Created a ceaser cipher that encrypted some text based on user variables:";
const ceaserLink = "https://markh1089.github.io/Ceaser_Cipher/";
const ceaserCode = "https://github.com/markh1089/Ceaser_Cipher.git";

const groupProjDescription =
  `Working alongside 2 other individuals to create a social media page for sharing recipes. Feel free to view our progress. Unfortunately at this time there is no demo, but feel free to view the source code:;
const groupLink = "";
const groupCode = "https://github.com/JoelPWK/cohort-jan-21";

const projectThumbnail = (thumbnail, description, demo, code) => {
  return (
    <div className={classes.ProjectContainer} id="projects">
      <div className={classes.Thumbnail}>
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
        <button className={classes.btn}>
          <a className={classes.btn} href={demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </button>
        <button className={classes.btn}>
          <a className={classes.btn} href={code} target="_blank" rel="noreferrer">
            Source
          </a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className={classes.Project}>
      <PageHeader title={"Project Portfolio"} />
      <div className={classes.Projects}>
        <div className={classes.Paragraph}>
          <p>Here are a few projects I have been working on:</p>
        </div>
        <div className={classes.Thumbnail}>
          {projectThumbnail(
            weather,
            weatherDescription,
            weatherLink,
            weatherCode
          )}

          {projectThumbnail(calculator, calculatorDescription,calculatorLink, calculatorCode)}
          {projectThumbnail(ceaserCipher, ceaserCipherDescription, ceaserLink, ceaserCode)}
          {projectThumbnail(quiz, quizDescription, quizLink, quizCode)}
          {projectThumbnail(groupProj, groupProjDescription, groupLink, groupCode)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
