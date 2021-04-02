import s from './NavLink.module.css';

const NavLink = (props) => {
    return (
        <li>
            <a className={s.before} href="">{props.text}</a>
        </li>
    );
}

export default NavLink;