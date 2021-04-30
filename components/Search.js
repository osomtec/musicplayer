import styles from './Search.module.scss';

function Search() {
    return (
        <div className={styles.Search}>
            <form>
                <input type="text" id="fsearch" name="nsearch" placeholder="Buscar" />
                {/* <label for="nsearch">Last Name</label> */}
            </form>
        </div>
    )
}

export default Search
