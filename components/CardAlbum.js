import styles from './CardAlbum.module.scss';
import Playbutton from './icons/Playbutton';

function CardAlbum(props) {
    return (
        <div className={styles.CardAlbum}>
            <div className={styles.imagen}>
                <img src={props.album.album.cover_medium} alt={props.album.title} />
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
                <h2>{props.album.title}</h2>
                <h3>{props.album.artist.name}</h3>
            </div>
        </div>
    )
}

export default CardAlbum
