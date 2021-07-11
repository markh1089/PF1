import PageHeader from "../PageHeader/PageHeader";
import classes from "./Projects.module.css";
import calculator from "../Images/calculator.png";
import ceaserCipher from "../Images/ceaserCipher.png";
import quiz from "../Images/quiz.png";
import groupProj from "../Images/GroupProj.png";

const calculatorDescription = "Created a calculator using React:";
const quizDescription =
  "A Javascript quiz based on the validity of various news headlines:";
const ceaserCipherDescription =
  "Created a ceaser cipher that encrypted some text based on user variables:";
const groupProjDescription =
  "Working alongside 2 other individuals to create a social media page for sharing recipes. Feel free to see our progress";

const projectThumbnail = (thumbnail, description) => {
  return (
    <div className={classes.ProjectContainer} id='projects'>
      <div className={classes.Thumbnail}>
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
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
          {projectThumbnail(calculator, calculatorDescription)}
          {projectThumbnail(ceaserCipher, ceaserCipherDescription)}
          {projectThumbnail(quiz, quizDescription)}
          {projectThumbnail(groupProj, groupProjDescription)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
