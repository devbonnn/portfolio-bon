import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png'
import smart from '../../assets/smart.png'
import smartly from '../../assets/smartly.png'
import adlib from '../../assets/adlib.png'
import radius from '../../assets/radius.png'
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={radius} link="https://www.radius.ph/"
           //h3="Radius Telecom"
           //p="Internet Provider"
           />   
             <ProjectCard src={adlib} link="https://www.ad-lib.io/"
           //h3="Ad-Lib.io"
           //p="Digital Ads"
           />   
             <ProjectCard src={smartly} link="https://www.smartly.io/"
           //h3="Smartly.io"
           //p="Advertising"
           />   
            <ProjectCard src={smart} link="https://smart.com.ph/corporate"
           //h3="Smart"
           //p="Telecomunication"
           />   
        </div>
    </section>
    );
}

export default Projects;  