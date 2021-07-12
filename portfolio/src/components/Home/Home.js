import classes from "./Home.module.css";
import code from './../Images/code.svg'
import codeWorld from './../Images/codeWorld.svg'
import WaveLine from "./WaveLine";
import Typist from 'react-typist';


const Home = () => {
  return (
    <div className={classes.Home} >
      <WaveLine />
      <div className={classes.Container}>
        <h1 className={classes.Hello}> Hi, <br/> I'm Mark Hempel</h1>
        <br />
        <br />
        <br />
        <Typist className="MyTypist">

        <h1> I am a : </h1>
        <br/>
        <h1>Html</h1>
        <Typist.Backspace count={4} delay={400} />
        <h1>Css</h1>
        <Typist.Backspace count={3} delay={400} />
        <h1>Javascript</h1>
        <Typist.Backspace count={10} delay={400} />
        <h1>React</h1>
        <Typist.Backspace count={5} delay={400} />
        <h1>Software Developer.</h1>
        </Typist>
      </div>
      <img className={classes.Code} src={code} alt='code ' />
      <img className={classes.CodeWorld} src={codeWorld} alt='code World' />
    </div>

  );
};

export default Home;
