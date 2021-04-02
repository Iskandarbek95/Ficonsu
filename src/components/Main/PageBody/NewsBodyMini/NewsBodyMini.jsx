import s from './NewsBodyMini.module.css';
import Search from './Search/Search';
import InstagramSec from './InstagramSec/InstagramSec';
import LatestSec from './LatestSec/LatestSec';
import PopularSec from './PopularSec/PopularSec';

const NewsBodyMini = (props) => {
    return (
        <div className={s.newsBodyMini}>
            <Search />
            <InstagramSec />
            <LatestSec />
            <PopularSec />
        </div>
    );
}

export default NewsBodyMini;