import s from './NavLast.module.css';
import NavLogo from './NavLogo/NavLogo';
import NavLinks from './NavLinks/NavLinks';

const NavLast = (props) => {
    return (
        <div className={s.navLast}>
            <div className={s.container}>
                <NavLogo />
                <NavLinks />
            </div>
        </div>
    );
}

export default NavLast;