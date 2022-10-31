import style from './Education.module.scss'
import EducationItem from "./EducationItem/EducationItem";
import Title from "../../Common/Components/Title/Title";

function Education() {
    return (
        <div className={style.educationBlock}>
            <div className={style.title}>
                <Title  text={'Education'}/>
            </div>


            <ul>
                <li>
                    <EducationItem
                        timing={'May 2022 - present'}
                        institution={'IT-Uncubator'}
                        speciality={'Front-end developer'}
                    />
                </li>
                <li>
                    <EducationItem
                        timing={'2021-2022'}
                        institution={'Educational Platform Skillbox'}
                        speciality={'Layout designer'}
                    />
                </li>
                <li>
                    <EducationItem
                        timing={'2021-2022'}
                        institution={'IT-school TeachMeSkills'}
                        speciality={'UX/UI designer'}
                    />
                </li>
                <li>
                    <EducationItem
                        timing={'2011-2015'}
                        institution={'Belarusian State Economic University'}
                        speciality={'Marketing specialist'}
                    />
                </li>
            </ul>

        </div>
    );
}

export default Education;