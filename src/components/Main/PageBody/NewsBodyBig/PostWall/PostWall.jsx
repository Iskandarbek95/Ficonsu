import Date from '../PostComponent/Date';
import PostTexts from '../PostComponent/PostsTexts';
import s from './PostWall.module.css';
import postWallImg from './../../../../../img/body-img/post-wall-st-img.jpg';

const PostWall = (props) => {
    return (
        <div className={s.postWall}>
            <Date />
            <div className={s.posts}>
                <div className={s.postsImg}>
                    <img src={postWallImg} alt=""/>
                </div>
                <PostTexts postsTitle="Wall Street taking notes on Spotify debut" />
            </div>
        </div>
    );
}

export default PostWall;