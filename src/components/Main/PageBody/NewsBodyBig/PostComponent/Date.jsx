import s from './Date.module.css';

const Date = (props) => {
    return (
        <ul className={s.date}>
            <li className={s.dateNumber}>09</li>
            <li className={s.dateText}>nov</li>
        </ul>
    );
}

export default Date;