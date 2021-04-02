import s from './Footer.module.css';
import FooterAbout from './FooterAbout/FooterAbout';
import FooterContent from './FooterContent/FooterContent';

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <FooterContent />
            <FooterAbout />
        </footer>
    );
}

export default Footer;