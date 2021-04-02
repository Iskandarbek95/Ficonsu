import s from './PostsTexts.module.css';

const PostTexts = (props) => {
    return (
        <div className={s.postsTexts}>
            <h2>
                <a href="">{props.postsTitle}</a>
            </h2>
            <div className={s.postsTegLink}>
                <ul>
                    <span>
                        <a href="">In finance</a>
                    </span>
                    <span className={s.slesh}>/</span>
                    <span>
                        <a href="">By dudoan</a>
                    </span>
                    <span className={s.slesh}>/</span>
                    <span>
                        <a href="">3 comments</a>
                    </span>
                </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, felis at lobortis vestibulum, eros neque malesuada diam, vel varius nulla dolor quis urna. Vivamus a consectetur enim, id tristique risus. Phasellus mi justo, tincidunt at porttitor ornare, porta sed elit. Sed neque ligula, ullamcorper sed imperdiet ut, suscipit ut quam. Praesent ut purus quis magna facilisis porttitor. Etiam interdum nibh ligula, ut molestie velit efficitur eu. Cras in augue tempor, ultricies nunc laoreet, dapibus velit. Nunc vel pharetra nisl. Cras fringilla velit odio, id semper enim placerat id.</p>
            <a className={s.readMe} href="">Read more</a>
        </div>
    );
}

export default PostTexts;