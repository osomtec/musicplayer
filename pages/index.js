import Head from 'next/head'
import Image from 'next/image'
import Cover from '../components/Cover'
import Loggin from '../components/Loggin'
import Player from '../components/Player'
import Search from '../components/Search'
import styles from '../styles/Home.module.scss'

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
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.library}>
                        <Library />
                    </div>
                    <div className={styles.playlist}>
                        <Playlist />
                    </div>

                </sidebar>

                <main className={styles.main}>
                    <div className={styles.topbar}>
                        <div className={styles.searchbox}>
                            <Search />
                        </div>
                        <div className={styles.loginbox}>
                            <Loggin />
                        </div>
                    </div>
                    <div className={styles.coverbox}>
                        <Cover />
                    </div>
                    <div className={styles.songsbox}>
                        <Songs />
                    </div>
                    <div className={styles.albumsbox}>
                        <Albums />
                    </div>
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
        <div>

        </div>
    )
}

function Library() {
    return (
        <div>

        </div>
    )
}

function Playlist() {
    return (
        <div>

        </div>
    )
}

function Songs() {
    return (
        <div>

        </div>
    )
}

function Albums() {
    return (
        <div>

        </div>
    )
}