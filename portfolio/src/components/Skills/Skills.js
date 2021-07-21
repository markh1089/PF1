import classes from "./Skills.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import CodeDesk from "./../Images/Code-Desk.svg"

const listTitleStyle = {
    fontWeight:900, color: '#9B1FE8', marginBottom:'5px'
}


const backendSkills = (
  <ul>
    <li style={listTitleStyle}><b>Backend </b></li>
    <br/>
    <li>Express</li>
    <li>NodeJs</li>
  </ul>
);

const frontendSkills = (
  <ul>
    <li style={listTitleStyle}><b>Frontend</b></li>
    <br/>
    <li>Html</li>
    <li>Css</li>
    <li>Javascript</li>
    <li>Bootstrap</li>
    <li>ReactJS</li>
  </ul>
);

const otherSkills = (
  <ul>
    <li style={listTitleStyle}><b>Other Skills </b></li>
    <br />
    <li>Git</li>
    <li>Json</li>
    <li>MongoDb</li>
    <li>Agile</li>
    <li>TDD</li>
  </ul>
);

const totalSkills = [frontendSkills, backendSkills, otherSkills];


const Skills = () => {
  return (
    <div className={classes.Skills} id='skills'>
      <PageHeader title="Skills" />
      <img className={classes.image} src={CodeDesk} alt='' />
      <p>

        <br />
        <br />
        <br />
      </p>
      <div className={classes.Container}>
        {totalSkills.map((skills) => {
          return <div className={classes.List}>{skills}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
