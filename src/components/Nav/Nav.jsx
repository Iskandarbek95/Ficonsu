import NavFirst from "./NavFirst/Navfirst";
import NavLast from "./NavLast/NavLast"
import s from './Nav.module.css';

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <NavFirst />
            <NavLast />
        </nav>
    );
}

export default Nav;