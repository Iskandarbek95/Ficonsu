import s from './PageTitle.module.css';
import nextIcon from './../../../img/body-img/next-icon.svg';

const PageTitle = (props) => {
    return (
        <div className={s.pageTitle}>
            <div>
                <h3>News</h3>
                <a href="">Home</a>
                <img src={nextIcon} alt="" />
                <h5>News</h5>
            </div>
        </div>
    );
}

export default PageTitle;