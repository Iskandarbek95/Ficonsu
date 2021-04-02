import s from './NavLogo.module.css';
import logoImg from './../../../../img/nav-img/nav-img-last/logo.png';

const NavLogo = (props) => {
    return (
        <div className={s.navLogo}>
            <a href="">
                <img src={logoImg} alt="" />
            </a>
        </div>
    );
}

export default NavLogo;