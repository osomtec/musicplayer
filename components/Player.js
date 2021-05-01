import { faPlay, faStepBackward, faStepForward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Player.module.scss';

const imgPoster = './images/adele21cover.jpg';

function Player() {
    return (
        <div className={styles.Player}>
            <div className={styles.left}>
                <div className={styles.poster}>
                    <img src={imgPoster} alt="poster" />
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>Cancion</p>
                    <p className={styles.subtitle}>Artista - Album</p>
                </div>
            </div>
            <div className={styles.center}>
                <button className={styles.previous}>
                    <FontAwesomeIcon icon={faStepBackward} className={styles.controlIcon} />
                </button>
                <button className={styles.playPause}>
                    <FontAwesomeIcon icon={faPlay} className={styles.controlIcon} />
                </button>
                <button className={styles.next}>
                    <FontAwesomeIcon icon={faStepForward} className={styles.controlIcon} />
                </button>
            </div>
            <div className={styles.right}>
                <input type="range" className={styles.volume} id='volume'/>
                <button className={styles.mute}>
                    <FontAwesomeIcon icon={faVolumeUp} className={styles.controlIcon} />
                </button>
            </div>
        </div>
    )
}

export default Player
