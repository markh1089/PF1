import { FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL = (url) => {
    return () => window.open(url,'_blank')
}
const Contact = () => {
    return ( 
        <div className={classes.Contact} id='contact'>
    <h1 className={classes.ContactHeader}>Contact Me</h1>
    <div className={classes.ContactIcons}>

    <FaGithub color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://github.com/markh1089')} />
    <FaLinkedinIn color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.linkedin.com/in/mark-hempel-0a5bb787/')} />
    <FaMailBulk color='white' size='30px' style={{padding: '1%'}} onClick={handleURL} />
    </div>
</div>
     );
}
 
export default Contact;