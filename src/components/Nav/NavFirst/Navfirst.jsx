import s from './NavFirst.module.css';
import cameraIcon from './../../../img/nav-img/nav-img-first/camera-icon.png';
import phoneIcon from './../../../img/nav-img/nav-img-first/phone-icon.png';
import facebookIcon from './../../../img/nav-img/nav-img-first/facebook-icon.png';
import twitterIcon from './../../../img/nav-img/nav-img-first/twitter-icon.png';
import linkedinIcon from './../../../img/nav-img/nav-img-first/linkedin-icon.png';
import instagramIcon from './../../../img/nav-img/nav-img-first/instagram-icon.png';

const NavFirst = (props) => {
    return (
        <div className={s.navFirst}>
            <div className={s.container}>
                <div className={s.adres}>
                    <img src={cameraIcon} alt="" />
                    <a href="">2835 Vidor Ave, San Antonio, TX 78216</a>
                    <img src={phoneIcon} alt="" />
                    <a href="">Phone +1 (100) 380-790</a>
                </div>
                <div className={s.follow}>
                    <p>Follow Us:</p>
                    <a href="">
                        <img src={facebookIcon} alt="" />
                    </a>
                    <a href="">
                        <img src={twitterIcon} alt="" />
                    </a>
                    <a href="">
                        <img src={linkedinIcon} alt="" />
                    </a>
                    <a href="">
                        <img src={instagramIcon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavFirst;