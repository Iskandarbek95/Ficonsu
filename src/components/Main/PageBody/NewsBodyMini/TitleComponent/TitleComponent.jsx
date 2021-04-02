import s from './TitleComponent.module.css';

const TitleComponent = (props) => {
    return (
        <div className={s.navRightSectionTitle}>
            <h4>{props.titleText}</h4>
            <div className={s.bottomLine}></div>
        </div>
    );
}

export default TitleComponent;