import s from './FooterAbout.module.css';;

const FooterAbout = (props) => {
    return (
        <div className={s.footerAbout}>
            <div className={s.container}>
                <div className={s.design}>
                    <a href="">© COPYRIGHT FINANCE.</a>
                    <p>DESIGN BY @DOANDU WITH LOVE.</p>
                </div>
                <div className={s.about}>
                    <a href="">ABOUT US</a>
                    <a href="">TERMS</a>
                    <a href="">SERVICES</a>
                    <a href="">CONTACTS</a>
                </div>
            </div>
        </div>
    );
}

export default FooterAbout;