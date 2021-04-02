import s from './NavLinkCard.module.css';
import cardIcon from './../../../../../img/nav-img/nav-img-last/card-icon.png';

const NavLinkCard = (props) => {
    return (
        <li>
            <a href="">
                <img className={s.cardIcon} src={cardIcon} alt="" />
            </a>
        </li>
    );
}

export default NavLinkCard;