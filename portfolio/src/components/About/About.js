import classes from './About.module.css';
import PageHeader from '../PageHeader/PageHeader';
import me from '../Images/Me.jpg'
import cv from '../Images/CV.pdf'

const About = () => {
    return ( 
    <div className={classes.AboutMe} id='about'>
        <PageHeader title={'About Me'}/>
        <div className={classes.Container}>
            <div className={classes.Text}>
                <h2> Hello! I'm Mark</h2>
                <p>
                    I am a Wakefield based software developer. 
                    <br/>
                    <br/>
                    Alongside my current role, I like to create and design web applications using HTML, CSS, JavaScript and React.
                    <br/>
                    <br/>                    
                    I am currently looking for a software developer role, if you would like to know more please feel free to get in touch! 

                </p>
                <br />
                <br />
                <br />
                <button>
                    <a className={classes.btn} href={cv} target="_blank" rel="noreferrer">See My CV</a>
                </button>
            </div>
            <div className={classes.Photo}>
                <img className={classes.Me} src={me} alt='me' />


            </div>

        </div>

    </div> );
}
 
export default About;