import Date from '../PostComponent/Date';
import PostTexts from '../PostComponent/PostsTexts';
import s from './PostAsia.module.css';
import postAsiaImg from './../../../../../img/body-img/post-asia-img.jpg';

const PostAsia = (props) => {
    return (
        <div className={s.postAsia}>
            <Date />
            <div className={s.posts}>
                <div className={s.postsImg}>
                    <img src={postAsiaImg} alt="" />
                </div>
                <PostTexts postsTitle="Asia shares fail to bounce with wall street" />
            </div>
        </div>
    );
}

export default PostAsia;