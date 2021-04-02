import NewsBodyBig from './NewsBodyBig/NewsBodyBig';
import NewsBodyMini from './NewsBodyMini/NewsBodyMini';
import s from './PageBody.module.css';

const PageBody = (props) => {
    return (
        <div className={s.container}>
            <NewsBodyBig />
            <NewsBodyMini />
        </div>
    );
}

export default PageBody;