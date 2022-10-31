import style from './Languages.module.scss'

function Languages() {
    return (
        <div className={style.languagesBlock}>
            <div>English</div>
            <div>Belarussian</div>
            <div>Russian</div>
        </div>
    );
}

export default Languages;