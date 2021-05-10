import styles from './CardSong.module.scss';
import Playbutton from './icons/Playbutton';

function CardSong({ song, setSongIndex }) {

    return (
        <div className={styles.CardSong} onClick={() => setSongIndex(song.index)}>
            <div className={styles.imagen}>
                <img src={song.cover} alt={song.title} />
                <div className={styles.curtain}>
                    <Playbutton />
                </div>
            </div>
            <div className={styles.blendMask}></div>
            <div className={styles.dots}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.content}>
                <h2>{song.title}</h2>
                <h3>{song.album}</h3>
            </div>
        </div>
    )
}

export default CardSong
