import styles from './CardSong.module.scss';

function CardSong(props) {
    return (
        <div className={styles.CardSong}>
            <div className={styles.imagen}>
                <img src={props.song.imagen} alt={props.song.title} />
            </div>
            <div className={styles.blendMask}></div>
            <div className={styles.curtain}></div>
            <div className={styles.content}>
                <h2>{props.song.title}</h2>
                <h3>Album de la cancion</h3>
            </div>
        </div>
    )
}

export default CardSong
