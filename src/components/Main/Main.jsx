import s from './Main.module.css';
import PageBody from './PageBody/PageBody';
import PageTitle from './PageTitle/PageTitle';

const Main = (props) => {
    return (
        <div className={s.main}>
            <PageTitle />
            <PageBody />
        </div>
    );
}

export default Main;