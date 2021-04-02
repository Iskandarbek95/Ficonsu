import s from './NavLinks.module.css';
import NavLink from './NavLink/NavLink';
import NavLinkCard from './NavLinkCard/NavLinkCard';
import NavLinkSearch from './NavLinkSearch/NavLinkSearch';

const NavLinks = (props) => {
    return (
        <ul className={s.navLinks}>
            <NavLink text="Home" />
            <NavLink text="Features" />
            <NavLink text="Pages" />
            <NavLink text="Blog" />
            <NavLink text="Portfolio" />
            <NavLink text="Elements" />
            <NavLinkCard />
            <NavLinkSearch />
        </ul>
    );
}

export default NavLinks;