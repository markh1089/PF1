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
        Aliquam dictum ipsum vel ante vestibulum tristique. Fusce gravida felis
        nec sapien accumsan pharetra. Vestibulum et porta lacus, sed laoreet ex.
        In semper a libero sed hendrerit. Praesent iaculis id ipsum eget
        posuere. Suspendisse mattis tortor eu consectetur accumsan. Proin
        lobortis nisi nec ligula scelerisque, ac ultricies est vestibulum.
        Vivamus placerat, mauris ac dignissim convallis, augue diam interdum
        metus, quis sodales libero purus et erat. Nullam nec rhoncus neque.
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
