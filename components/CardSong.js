import styles from './CardSong.module.scss';
import Playbutton from './icons/Playbutton';

function CardSong(props) {
    return (
        <div className={styles.CardSong}>
            <div className={styles.imagen}>
                <img src={props.song.album.cover_medium} alt={props.song.title} />
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
                <h2>{props.song.title}</h2>
                <h3>{props.song.album.title}</h3>
            </div>
        </div>
    )
}

export default CardSong
