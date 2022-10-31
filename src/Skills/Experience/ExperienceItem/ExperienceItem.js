import style from './ExperienceItem.module.scss'

function ExperienceItem(props) {
    return (
        <div className={style.educationItem}>
            <div>
                <div>{props.timing}</div>
                <div>
                    <span>{props.position}</span>
                    <span>{props.workPlace}</span>
                </div>
                <span>IT-Uncubator</span>
            </div>
        </div>
    );
}

export default ExperienceItem;