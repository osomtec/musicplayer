import styles from './CardAlbum.module.scss';
import Playbutton from './icons/Playbutton';

function CardAlbum({ album }) {

    return (
        <div className={styles.CardAlbum}>
            <div className={styles.imagen}>
                <img src={album.cover} alt={album.title} />
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
                <h2>{album.title}</h2>
                <h3>{album.artist}</h3>
            </div>
        </div>
    )
}

export default CardAlbum
