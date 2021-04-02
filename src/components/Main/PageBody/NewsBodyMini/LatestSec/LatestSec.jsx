import TitleComponent from '../TitleComponent/TitleComponent';
import s from './LatestSec.module.css';
import latestPostImg from './../../../../../img/body-img/latest-post-img.png'

const LatestSec = () => {
    return (
        <div className={s.latestSec}>
            <TitleComponent titleText="Latest posts" />
            <div className={s.latestInforms}>
                <div className={s.latestInformsImg}>
                    <img src={latestPostImg} alt=""/>
                </div>
                <div className={s.latestInformsText}>
                    <a href="">ASIA SHARES FAIL TO BOUNCE WITH WALL STREET</a>
                    <p>02 Feb 2018</p>
                </div>
            </div>
            <div className={s.latestInforms}>
                <div className={s.latestInformsImg}>
                    <img src={latestPostImg} alt="" />
                </div>
                <div className={s.latestInformsText}>
                    <a href="">DOLLAR SLIPS VERSUS YEN AS TRADE TENSIONS OUTLOOK</a>
                    <p>02 Feb 2018</p>
                </div>
            </div>
            <div className={s.latestInforms}>
                <div className={s.latestInformsImg}>
                    <img src={latestPostImg} alt="" />
                </div>
                <div className={s.latestInformsText}>
                    <a href="">WALL STREET TAKING NOTES ON SPOTIFY DEBUT</a>
                    <p>02 Feb 2018</p>
                </div>
            </div>
        </div>
    );
}

export default LatestSec;