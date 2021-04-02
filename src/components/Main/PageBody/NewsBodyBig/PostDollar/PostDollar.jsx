import Date from '../PostComponent/Date';
import PostTexts from '../PostComponent/PostsTexts';
import s from './PostDollar.module.css';
import postDollarImg from './../../../../../img/body-img/post-dollar-img.jpg';

const PostDollar = (props) => {
    return (
        <div className={s.postDollar}>
            <Date />
            <div className={s.posts}>
                <div className={s.postsImg}>
                    <img src={postDollarImg} alt="" />
                </div>
                <PostTexts postsTitle="Dollar slips versus yen as trade tensions outlook" />
            </div>
        </div>
    );
}

export default PostDollar;