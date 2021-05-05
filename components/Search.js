import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import styles from './Search.module.scss';

const Search = ({ value, onChange }) => {
    
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(e) {
        setDisplayValue(e.target.value);
        debouncedChange(e.target.value);
    }

    return (
        <div className={styles.Search}>
            <form>
                <input
                    type='search'
                    value={displayValue}
                    onChange={handleChange}
                    placeholder='Buscar'
                />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    );
}

function useDebounce(fn, delay) {
    
    const timeoutRef = useRef(null);

    function debouncedFn(...args) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }

    return debouncedFn;
}

export default Search;
