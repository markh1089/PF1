import classes from "./Home.module.css";
import code from './../Images/code.svg'
import codeWorld from './../Images/codeWorld.svg'


const Home = () => {
  return (
    <div className={classes.Home} >
      <div className={classes.Container}>
        <h1 className={classes.Hello}> Hello World.</h1>
        <h1> Welcome to my website </h1>
      </div>
      <img className={classes.Code} src={code} alt='code ' />
      <img className={classes.CodeWorld} src={codeWorld} alt='code World' />
    </div>

  );
};

export default Home;
