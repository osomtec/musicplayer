
import { createContext, useState } from 'react';

export const DataContext = createContext();

// const initialData = {
//     nombre: 'Fernando',
//     edad: 25
// }

function DataProvider({ children }) {

    const [songsData, setSongs] = useState({});
    const [albumsData, setAlbums] = useState({});
    const [text, setText] = useState('');

    return (
        <DataContext.Provider value={{
            songsData,
            setSongs,
            albumsData,
            setAlbums,
            text: '',
            setAlbums
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
