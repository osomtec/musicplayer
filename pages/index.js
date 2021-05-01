import Head from 'next/head'
import Image from 'next/image'
import Cover from '../components/Cover'
import Loggin from '../components/Loggin'
import Player from '../components/Player'
import Search from '../components/Search'
import styles from '../styles/Home.module.scss'
import CardSong from '../components/CardSong'
import { songsData } from '../songsData'

const imgLogo = './images/foxbel-music3x.png';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Foxbel Music</title>
                <meta name="description" content="Foxbel Music using Deezer API Rest" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
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
