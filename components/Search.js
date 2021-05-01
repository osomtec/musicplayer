import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';

function Search() {
    return (
        <div className={styles.Search}>
            <form>
                <input type="text" id="fsearch" name="nsearch" placeholder="Buscar" />
                <button><FontAwesomeIcon icon={faSearch} /></button>
                {/* <label for="nsearch">Last Name</label> */}
            </form>
        </div>
    )
}

export default Search
