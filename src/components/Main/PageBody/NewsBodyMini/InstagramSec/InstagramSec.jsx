import s from './InstagramSec.module.css';
import navRightImg1 from './../../../../../img/body-img/nav-right-img-1.png';
import navRightImg2 from './../../../../../img/body-img/nav-right-img-2.png';
import navRightImg3 from './../../../../../img/body-img/nav-right-img-3.png';
import navRightImg4 from './../../../../../img/body-img/nav-right-img-4.png';
import navRightImg5 from './../../../../../img/body-img/nav-right-img-5.png';
import navRightImg6 from './../../../../../img/body-img/nav-right-img-6.png';
import TitleComponent from './../TitleComponent/TitleComponent';

const InstagramSec = (props) => {
    return (
        <div className={s.navRightInstagram}>
            <TitleComponent titleText="Instagram photos" />
            <div className={s.instagramImgLinks}>
                <div>
                    <a href="">
                        <img src={navRightImg1} alt="" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={navRightImg2} alt="" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={navRightImg3} alt="" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={navRightImg4} alt="" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={navRightImg5} alt="" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={navRightImg6} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default InstagramSec;