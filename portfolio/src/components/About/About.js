import classes from './About.module.css';
import PageHeader from '../PageHeader/PageHeader';
import me from '../Images/Me.jpg'

const About = () => {
    return ( 
    <div className={classes.AboutMe} id='about'>
        <PageHeader title={'About Me'}/>
        <div className={classes.Container}>
            <div className={classes.Text}>
                <h2> Hello! I'm Mark</h2>
                <p>
                    I am looking for a software developer role, get in touch!
                    Morbi nulla odio, vulputate vitae enim et, blandit mattis augue. Ut ullamcorper porttitor justo, eu iaculis nunc lacinia ac. Vivamus cursus elit sit amet leo pretium mollis. Duis scelerisque mollis lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tempor nulla felis, ut euismod orci lacinia eu. Nullam rhoncus tellus sit amet sem rutrum, non porttitor mauris convallis.
                </p>
            </div>
            <div className={classes.Photo}>
                <img className={classes.Me} src={me} alt='me' />


            </div>

        </div>

    </div> );
}
 
export default About;