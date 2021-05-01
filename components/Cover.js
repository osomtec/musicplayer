import styles from './Cover.module.scss';
import Playbutton from './icons/Playbutton';

const imgAlbumCover = './images/adele21cover.jpg';
const imgPlay = './images/play.svg';

function Cover() {
    return (
        <div className={styles.Cover}>

            <div className={styles.algumCover}>
                <img src={imgAlbumCover} alt="portada de album o cancion" />
                <div className={styles.playMask}>
                    <Playbutton />
                </div>
            </div>

            <div className={styles.information}>
                <div className={styles.title}>
                    Adele 21
                </div>
                <div className={styles.subtitle}>
                    <p className={styles.tagline}>Lo mejor de Adele</p>
                    <p className={styles.followers}>250000 de seguidores</p>
                </div>
                <div className={styles.description}>
                    <p>
                        Adele Laurie Blue Adkins MBE (/əˈdɛl/; born 5 May 1988) is an English singer and songwriter.
                        After graduating from the BRIT School in 2006, Adele signed a record deal with XL Recordings.
                    </p>
                </div>
                <div className={styles.buttons}>
                    <button>Reproducir</button>
                    <button>Seguir</button>
                    <button>...</button>
                </div>
            </div>

        </div>
    )
}

export default Cover
