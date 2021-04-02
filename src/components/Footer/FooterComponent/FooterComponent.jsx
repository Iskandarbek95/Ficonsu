import s from './FooterComponent.module.css';

const FooterComponent = (props) => {
    return (
        <div className={s.footerPageTitle}>
            <h4>{props.titleText}</h4>
            <div className={s.bottomLine}></div>
        </div>
    );
}

export default FooterComponent;