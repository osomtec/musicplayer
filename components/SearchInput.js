// import { useRef, useState } from 'react';

// const SearchInput = ({ value, onChange }) => {
//     const [displayValue, setDisplayValue] = useState(value);
//     const debouncedChange = useDebounce(onChange, 500);

//     function handleChange(event) {
//         setDisplayValue(event.target.value);
//         debouncedChange(event.target.value);
//     }

//     return (
//         <input
//             type="search"
//             value={displayValue}
//             onChange={handleChange}
//         />
//     );
// };

// function useDebounce(fn, delay) {
//     const timeoutRef = useRef(null);

//     function debouncedFn(...args) {
//         clearTimeout(timeoutRef.current);
//         timeoutRef.current = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     }

//     return debouncedFn;
// }

// export default SearchInput;