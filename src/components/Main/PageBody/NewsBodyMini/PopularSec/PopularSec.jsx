import TitleComponent from '../TitleComponent/TitleComponent';
import s from './PopularSec.module.css';

const PopularSec = () => {
    return (
        <div className={s.popularSec}>
            <TitleComponent titleText="Popular tags" />
            <div className={s.popularSecLinks}>
                <div>
                    <a href="">Estae</a>
                    <a href="">Income</a>
                    <a href="">Education</a>
                </div>
                <div>
                    <a href="">Bisiness</a>
                    <a href="">Development</a>
                </div>
                <div>
                    <a href="">Loan</a>
                    <a href="">Taxes</a>
                    <a href="">Crow</a>
                </div>
                <div>
                    <a href="">Consulting</a>
                    <a href="">Insurance</a>
                    <a href="">Plan</a>
                </div>
            </div>
        </div>
    );
}

export default PopularSec;