import s from './NavLinkSearch.module.css';
import searchIcon from './../../../../../img/nav-img/nav-img-last/search-icon.png';

const NavLinkSearch = (props) => {
    return (
        <li>
            <a href="">
                <img className={s.searchIcon} src={searchIcon} alt="" />
            </a>
        </li>
    );
}

export default NavLinkSearch;