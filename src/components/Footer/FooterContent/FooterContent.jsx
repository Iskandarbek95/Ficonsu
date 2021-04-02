import s from './FooterContent.module.css';
import footerLogo from './../../../img/footer-img/logo-footer.png';
import footerLocation from './../../../img/footer-img/footer-location-icon.png';
import footeMessage from './../../../img/footer-img/footer-message-icon.png';
import footerCall from './../../../img/footer-img/footer-call-icon.png';
import footerTwitter from './../../../img/footer-img/footer-twitter-img.png';
import navRightImg1 from './../../../img/body-img/nav-right-img-1.png';
import navRightImg2 from './../../../img/body-img/nav-right-img-2.png';
import navRightImg3 from './../../../img/body-img/nav-right-img-3.png';
import navRightImg4 from './../../../img/body-img/nav-right-img-4.png';
import navRightImg5 from './../../../img/body-img/nav-right-img-5.png';
import navRightImg6 from './../../../img/body-img/nav-right-img-6.png';
import FooterComponent from './../FooterComponent/FooterComponent';

const FooterContent = (props) => {
    return (
        <div className={s.footerContent}>
            <div className={s.container}>
                <div className={s.firstText}>
                    <img src={footerLogo} alt="" />
                    <p className={s.text}>We have a wide breadth of experience over 30 years providing financial services.</p>
                    <div className={s.inform}>
                        <div>
                            <img src={footerLocation} alt="" />
                            <p>2835 Vidor Ave, San Antonio</p>
                        </div>
                        <div className={s.borderTop}>
                            <img src={footeMessage} alt="" />
                            <p>Support@finance.com</p>
                        </div>
                        <div className={s.borderTop}>
                            <img src={footerCall} alt="" />
                            <p>+1 (100) 380-790 / 6:30 AM - 6:30 PM</p>
                        </div>

                    </div>
                </div>
                <div className={s.tweets}>
                    <FooterComponent titleText="Recent tweets" />
                    <div className={s.tweetsPosts}>
                        <div className={s.tweetsPostsImg}>
                            <img src={footerTwitter} alt="" />
                        </div>
                        <div className={s.tweetsPostsText}>
                            <a href="">LIFE IS A STORY, MAKE YOURS THE BEST SELLER</a>
                            <p>15 June 2018</p>
                        </div>
                    </div>
                    <div className={s.tweetsPosts}>
                        <div className={s.tweetsPostsImg}>
                            <img src={footerTwitter} alt="" />
                        </div>
                        <div className={s.tweetsPostsText}>
                            <a href="">LIFE IS A STORY, MAKE YOURS THE BEST SELLER</a>
                            <p>17 June 2018</p>
                        </div>
                    </div>
                </div>
                <div className={s.tags}>
                    <FooterComponent titleText="Popular tags" />
                    <div className={s.popularSecLinks}>
                        <div>
                            <a href="">Estate</a>
                            <a href="">Education</a>
                        </div>
                        <div>
                            <a href="">Taxes</a>
                            <a href="">Loan</a>
                            <a href="">Crow</a>
                        </div>
                        <div>
                            <a href="">Insurance</a>
                            <a href="">Income</a>
                        </div>
                        <div>
                            <a href="">Plan</a>
                            <a href="">Consulting</a>
                        </div>
                    </div>
                </div>
                <div className={s.photostream}>
                    <FooterComponent titleText="Instagram photos" />
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
            </div>
        </div>
    );
}

export default FooterContent;