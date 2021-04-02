import s from './Search.module.css';


const Search = (props) => {
    return (
        <form action="">
            <input className={s.search} type="search" id="search" name="search" placeholder="search" />
        </form>
    );
}

export default Search;