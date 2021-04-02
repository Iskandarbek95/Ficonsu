import s from './NewsBodyBig.module.css';
import PostAsia from './PostAsia/PostAsia';
import PostDollar from './PostDollar/PostDollar';
import PostWall from './PostWall/PostWall';
import nextIcon from './../../../../img/body-img/next-icon.png';
import prevIcon from './../../../../img/body-img/perv-icon.png';


const NewsBodyBig = (props) => {
    return (
        <div className={s.newsBodyBig}>
            <PostAsia />
            <PostDollar />
            <PostWall />
            <div className={s.nextItems}>
                <ul>
                    <li>
                        <a href="">
                            <img src={prevIcon} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="">1</a>
                    </li>
                    <li>
                        <a href="">2</a>
                    </li>
                    <li>
                        <a href="">3</a>
                    </li>
                    <li>
                        <a href="">
                            <img src={nextIcon} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NewsBodyBig;