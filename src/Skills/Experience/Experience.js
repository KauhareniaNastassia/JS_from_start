import style from './Experience.module.scss'
import ExperienceItem from "./ExperienceItem/ExperienceItem";

function About() {
    return (
        <div className={style.experienceBlock}>

            <ExperienceItem
                timing={'February 2022 - present'}
                position={'Front-end developer'}

            />
            <ExperienceItem
                timing={'June 2019-present'}
                position={'Lead decorator'}
            />


        </div>
    );
}

export default About;