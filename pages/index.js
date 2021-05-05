import Head from 'next/head'
import Cover from '../components/Cover'
import Loggin from '../components/Loggin'
import Player from '../components/Player'
import Search from '../components/Search'
import styles from '../styles/Home.module.scss'
import CardSong from '../components/CardSong'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'
import { useContext, useEffect, useState } from 'react'
import CardAlbum from '../components/CardAlbum'

/**
 * https://api.deezer.com/search?q=artist:"aloe blacc"
 * https://api.deezer.com/search?q=album:"good things"
 * https://api.deezer.com/search?q=track:"i need a dollar"
 * 
 */

// const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
const API_URL = 'https://api.deezer.com/';

const imgLogo = './images/foxbel-music3x.png';

export default function IndexPage() {
    return (
        <SmoothScrollProvider options={{ smooth: false }}>
            <Home />
        </SmoothScrollProvider>
    )
}

function Home() {

    const [songsData, setSongs] = useState({});
    const [albumsData, setAlbums] = useState({});
    const [text, setText] = useState('');

    const { scroll } = useContext(SmoothScrollContext)

    useEffect(() => {
        if (text) {

            setSongs({});
            setAlbums({});

            const fetchData = async () => {
                try {
                    const resSongs = await fetch(API_URL + `search?q=track:"${text}"`)
                    const songsData = await resSongs.json()
                    const resAlbums = await fetch(API_URL + `search?q=album:"${text}"`)
                    const albumsData = await resAlbums.json()
                    console.log('Songs retrieved: ', songsData.data.length, songsData.data)
                    console.log('Albums retrieved: ', albumsData.data.length, albumsData.data)
                    setSongs(songsData)
                    setAlbums(albumsData)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData();
        }

    }, [text]);

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
                        <Search
                            value={text}
                            onChange={(search) => setText(search)}
                        />
                        <Loggin />
                    </div>

                    {text && !songsData.data && <Results tag={'Loading...'}/>}

                    <Cover />
                    <Results tag={'Canciones'}/>
                    <Songs songsData={songsData} />
                    <Results tag={'Albumes'}/>
                    <Albums albumsData={albumsData} />
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

function Songs({ songsData }) {

    return (
        <div className={styles.Songs}>
            {
                songsData.data && (
                    songsData.data.map(song => (
                        <CardSong key={song.id} song={song} />
                    ))
                )
            }
        </div>
    )
}

function Albums({ albumsData }) {

    return (
        <div className={styles.Albums}>
            {
                albumsData.data && (
                    albumsData.data.map(album => (
                        <CardAlbum key={album.id} album={album} />
                    ))
                )
            }
        </div>
    )
}

function Results({tag}) {
    return (
        <div className={styles.Results}>
            {tag.length && <h2>{tag}</h2>}
        </div>
    )
}
