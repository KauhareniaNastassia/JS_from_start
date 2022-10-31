import style from './Information.module.scss'

function Information() {
    return (
        <div className={style.informationBlock}>
           <div className={style.leftBlock}>
               <p>I am a front-end developer with huge interest in programming. I have
               an experience in creating SPA with React/Redux/ TypeScript in team. Now I am improving my skills in this direction and expanding them with new technologies. And also I have interest to learn React Native and Angular. I have an experience in design, I was studying UX/UI design.</p>
               <p>I spend my leisure time reading literature and articles about development, watching video tutorials on YouTube about React and JS.</p>
           </div>
            <div className={style.rightBlock}>
                <ul>
                    <li>
                        <span className={style.infoTitle}>Name:</span>
                        <span className={style.infoDescr}>Nastassia Kauharenia</span>
                    </li>
                    <li>
                        <span className={style.infoTitle}>Phone:</span>
                        <span className={style.infoDescr}>+375-29-67-37-963</span>
                    </li>
                    <li>
                        <span className={style.infoTitle}>Email:</span>
                        <span className={style.infoDescr}>kavgorenya@gmail.com</span>
                    </li>
                    <li>
                        <span className={style.infoTitle}>Remote work:</span>
                        <span className={style.infoDescr}>available</span>
                    </li>
                    <li>
                        <span className={style.infoTitle}>English:</span>
                        <span className={style.infoDescr}>B1</span>
                    </li>
                </ul>

            </div>

        </div>
    );
}

export default Information;