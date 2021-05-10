import Head from 'next/head'
import Cover from '../components/Cover'
import Loggin from '../components/Loggin'
import Player from '../components/Player'
import Search from '../components/Search'
import CardSong from '../components/CardSong'
import CardAlbum from '../components/CardAlbum'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'
import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'

/**
 * Sample API callings:
 * 
 * https://api.deezer.com/search?q=artist:"aloe blacc"
 * https://api.deezer.com/search?q=album:"good things"
 * https://api.deezer.com/search?q=track:"i need a dollar"
 * 
 */

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

const imgLogo = './images/foxbel-music3x.png';

export default function IndexPage() {
    return (
        <SmoothScrollProvider options={{ smooth: false }}>
            <Home />
        </SmoothScrollProvider>
    )
}

function Home() {

    const { scroll } = useContext(SmoothScrollContext)

    const [songsData, setSongs] = useState([]);
    const [albumsData, setAlbums] = useState([]);
    const [text, setText] = useState('');

    const [gPlaylist, setGPlaylist] = useState([]);
    const [gCurrentSong, setGCurrentSong] = useState(null)
    const [gIsPlaying, setGIsPlaying] = useState(false)

    useEffect(() => {
        if (text) {

            const fetchData = async () => {
                try {
                    const resSongs = await fetch(API_URL + `search?q=track:"${text}"`)
                    const songsDataRaw = await resSongs.json()
                    const resAlbums = await fetch(API_URL + `search?q=album:"${text}"`)
                    const albumsDataRaw = await resAlbums.json()
                    setSongs(songsDataRaw.data)
                    setAlbums(albumsDataRaw.data)
                } catch (error) {
                    console.log('Fetch Error:', error)
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

                    {text && songsData && <Results tag={'Loading...'} />}
                    <Cover />

                    {text && songsData && <Results tag={'Canciones'} />}
                    <Songs songsData={songsData} setGPlaylist={setGPlaylist} setGCurrentSong={setGCurrentSong} setGIsPlaying={setGIsPlaying} />

                    {text && albumsData && <Results tag={'Albumes'} />}
                    {/* <Albums albumsData={albumsData} /> */}
                </main>
            </div>

            <footer className={styles.footer}>
                <Player newPlayList={gPlaylist} play={gIsPlaying} newCurrentSong={gCurrentSong} />
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

function Songs({ songsData, setGPlaylist, setGCurrentSong, setGIsPlaying }) {

    function filterSongs(rawSongs) {
        let newArray = []
        for (let i = 0; i < rawSongs.length; i++) {
            const newSong = {}
            newSong.index = i
            newSong.id = rawSongs[i].id
            newSong.title = rawSongs[i].title
            newSong.artist = rawSongs[i].artist.name
            newSong.album = rawSongs[i].album.title
            newSong.cover = rawSongs[i].album.cover_medium
            newSong.bigCover = rawSongs[i].album.cover_big
            newSong.preview = rawSongs[i].preview
            newArray.push(newSong)
        }
        return newArray;
    }

    function handleClick(index) {
        console.log('you clicked at Songs', index)
        setGCurrentSong(index)
        setGIsPlaying(true)
        setGPlaylist(filterSongs(songsData))
    }

    return (
        <div className={styles.Songs}>
            {
                songsData && (
                    filterSongs(songsData).map(song => (
                        <CardSong key={song.id} song={song} setSongIndex={handleClick} />
                    ))
                )
            }
        </div>
    )
}

function Albums({ albumsData, gPlaylist, gCurrentSong, gIsPlaying }) {

    const [albumId, setAlbumId] = useState(0);

    function filterAlbums(rawAlbums) {
        let newArray = []
        for (let i = 0; i < rawAlbums.length; i++) {
            const newAlbum = {}
            newAlbum.index = i
            newAlbum.id = rawAlbums[i].id
            newAlbum.title = rawAlbums[i].title
            newAlbum.artist = rawAlbums[i].artist.name
            newAlbum.album = rawAlbums[i].album.title
            newAlbum.cover = rawAlbums[i].album.cover_medium
            newAlbum.bigCover = rawAlbums[i].album.cover_big
            newAlbum.preview = rawAlbums[i].preview
            newArray.push(newAlbum)
        }
        return newArray
    }

    function handleClick(id) {
        console.log('you clicked me again', id)
    }

    useEffect(() => {
        handleClick(albumId)
    }, [albumId])

    console.log('albumsData in Albums component is: ')
    console.log(albumsData)

    return (
        <div className={styles.Albums}>
            {
                albumsData && (
                    albumsData.map(album => (
                        <CardAlbum key={album.id} album={album} />
                    ))
                )
            }
        </div>
    )
}

function Results({ tag }) {
    return (
        <div className={styles.Results}>
            <h2>{tag}</h2>
        </div>
    )
}
