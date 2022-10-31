import style from './EducationItem.module.scss'

function EducationItem(props) {
    return (

            <div className={style.educationItem}>
                <div className={style.time}>{props.timing}</div>
                <div className={style.place}>
                    <h3>{props.institution}</h3>
                    <span>{props.speciality}</span>
                </div>
            </div>

    );
}

export default EducationItem;