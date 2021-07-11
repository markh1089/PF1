import PageHeader from '../PageHeader/PageHeader'
import classes from './Projects.module.css'

const projectThumbnail = (thumbnail, description) => {
    return (
        <div className={classes.ProjectContainer}>
            <div className={classes.Thumbnail}>
                <img src={thumbnail} alt='thumbnail'></img>
            </div>
            <div className= {classes.Text}>
                <p>{description}</p>
            </div>

        </div>
    )
}

const Projects = () => {
    return ( 
        <div className={classes.Projects}>
            <PageHeader title={'Project Portfolio'} />
            <div className={classes.Projects}>
                <p className={classes.Paragraph}>
                    Here are a few projects I have been working on:
                </p>
            </div>
            <div className={classes.Thumbnail}>

            </div>

        </div>
     );
}
 
export default Projects;