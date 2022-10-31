import style from './Skills.module.scss'
import Skill from "./Skill/Skill";

function About() {
    return (
        <div className={style.skillsBlock}>

            <div className={style.skillsContainer} >

                <div className={style.skills}>
                    <Skill title={"JS"} description={"Bla-bla-bla-bla"}/>
                    <Skill title={"CSS"} description={"Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla-Bla-bla-bla-bla"}/>
                    <Skill title={"React"} description={"Bla"}/>

                </div>

            </div>
        </div>
    );
}

export default About;