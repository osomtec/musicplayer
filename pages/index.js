import Head from 'next/head'
import Cover from '../components/Cover'
import Loggin from '../components/Loggin'
import Player from '../components/Player'
import Search from '../components/Search'
import styles from '../styles/Home.module.scss'
import CardSong from '../components/CardSong'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'
import { useContext } from 'react'
import { songsData } from '../songsData'

const imgLogo = './images/foxbel-music3x.png';

export default function IndexPage() {
    return (
        <SmoothScrollProvider options={{ smooth: true }}>
            <Home />
        </SmoothScrollProvider>
    )
}

function Home() {
    const { scroll } = useContext(SmoothScrollContext)
    return (
        <div>
            <Head>
                <title>Foxbel Music</title>
                <meta name="description" content="Foxbel Music using Deezer API Rest" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div data-scroll-section className={styles.container}>
                <sidebar className={styles.sidebar}>
                    <Logo />
                    <Library />
                    <Playlist />
                </sidebar>

                <main className={styles.main}>
                    <div className={styles.topbar}>
                        <Search />
                        <Loggin />
                    </div>
                    <Cover />
                    <Results />
                    <Songs />
                    <Albums />
                </main>
            </div>

            <footer className={styles.footer}>
                <Player />
            </footer>
        </div>
    )
}

function Logo() {
    return (
        <div className={styles.Logo}>
            <img src={imgLogo} alt="logo" />
        </div>
    )
}

function Library() {
    return (
        <div className={styles.Library}>
            <h2>Mi Librería</h2>
            <ul>
                <li>Recientes</li>
                <li>Artistas</li>
                <li>Albumes</li>
                <li>Canciones</li>
                <li>Estaciones</li>
            </ul>
        </div>
    )
}

function Playlist() {
    return (
        <div className={styles.Playlist}>
            <h2>Playlist</h2>
            <ul>
                <li>Metal</li>
                <li>Para bailar</li>
                <li>Rock 90s</li>
                <li>Baladas</li>
            </ul>
        </div>
    )
}

function Songs() {
    return (
        <div className={styles.Songs}>
            {
                songsData.map(song => (
                    <CardSong key={song.id} song={song} />
                ))
            }
        </div>
    )
}

function Albums() {
    return (
        <div className={styles.Albums}>

        </div>
    )
}

function Results() {
    return (
        <div className={styles.Results}>
            <h2>Resultados</h2>
        </div>
    )
}


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


/**
 * https://www.youtube.com/watch?v=k0cZA0NYTyQ&list=PLv2oOZboUtKO4_YN4T2CP9-fUKM0yozKg&index=16
 * 
 */

// import { useEffect, useState } from 'react';
// import SearchInput from './SearchInput';

// export default function App() {
//     const [info, setInfo] = useState({});
//     const [text, setText] = useState('');

//     useEffect(() => {
//         if (text) {

//             setInfo({});

//             const fetchData = async() => {
//                 try {
//                     const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127')
//                     const data = await res.json()
//                     console.log(data)
//                     setInfo(data)
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//             fetchData();
//         }

//     }, [text]);

//     return (
//         <div className="App">
//             <h1>Animes</h1>
//             <SearchInput
//                 value={text}
//                 onChange={(search) => setText(search)}
//             />
//             {text && !info.data && <h2>Cargando...</h2>}
//             {info.data && (
//                 <ul className="animes-list">
//                     {info.data.map((anime) => (
//                         <li key={anime.id}>
//                             <img
//                                 src={anime.attributes.posterImage.small}
//                                 alt={anime.attributes.canonicalTitle}
//                             />
//                             {anime.attributes.canonicalTitle}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }
