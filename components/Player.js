import { faPause, faPlay, faStepBackward, faStepForward, faVolumeMute, faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './Player.module.scss';

const imgPoster = './images/adele21cover.jpg';

function Player() {
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(0)   // the song is repeated on next and previous buttons
    const [playList] = useState([]);
    const [song, setSong] = useState(undefined)

    function handleClickMute() {
        setIsMuted(!isMuted.current);
        if (song.muted) {
            song.muted = false;
            setIsMuted(false);
        }
        else {
            song.muted = true;
            setIsMuted(true);
        }
    }

    function handleInputVolume(e) {
        const value = e.target.value;
        song.volume = value;
    }

    function playSong() {
        if (currentSong >= 0) {
            song.src = playList[currentSong];
            song.play();
            setIsPlaying(true);
        }
        console.log(`currentSong= ${currentSong}  :  Lenght = ${playList.length}  :  isPlaying = ${isPlaying}`);
    }

    function stopSong() {
        song.pause();
        song.currentTime = 0;
        setIsPlaying(false);
    }

    function handleClickPlay() {
        if (!isPlaying) {        // song.paused is not working (it always gives true)
            playSong();
        }
        else {
            stopSong();
        }
    }

    function handleClickNext() {
        stopSong();
        let current = currentSong + 1;
        if (current === playList.length)
            current = 0;
        setCurrentSong(current);
        playSong();
    }

    function handleClickPrevious() {
        stopSong();
        let current = currentSong - 1;
        if (current < 0)
            current = playList.length - 1;
        setCurrentSong(current);
        playSong();
    }

    useEffect(() => {

        function addList(sourceUrl) {
            playList.push(sourceUrl);
        }

        const updateSong = () => {
            setSong(new Audio());
        }

        updateSong();

        // song.addEventListener('ended', handleClickNext);
        setIsPlaying(false);
        setCurrentSong(0);

        addList('https://www.bensound.com/bensound-music/bensound-summer.mp3');
        addList('https://www.bensound.com/bensound-music/bensound-ukulele.mp3');
        addList('https://www.bensound.com/bensound-music/bensound-beyondtheline.mp3');

        // return () => {
        //     song.removeEventListener('ended', handleClickNext);
        // }
    }, [playList])


    return (
        <>
            {
                typeof song !== 'undefined' ? (
                    <div className={styles.Player}>
                        <div className={styles.left}>
                            {/* <div className={styles.poster}> */}
                            {/* <img src={imgPoster} alt="poster" /> */}
                            {/* </div> */}
                            <div className={styles.info}>
                                <p className={styles.title}>Cancion</p>
                                <p className={styles.subtitle}>Artista - Album</p>
                            </div>
                        </div>
                        <div className={styles.center}>
                            <button className={styles.previous} onClick={handleClickPrevious}>
                                <FontAwesomeIcon icon={faStepBackward} className={styles.controlIcon} />
                            </button>
                            <button className={styles.playPause} onClick={handleClickPlay} data-arg_value={undefined}>
                                {
                                    isPlaying
                                        ? <FontAwesomeIcon icon={faPause} className={styles.controlIcon} />
                                        : <FontAwesomeIcon icon={faPlay} className={styles.controlIcon} />
                                }

                            </button>
                            <button className={styles.next} onClick={handleClickNext}>
                                <FontAwesomeIcon icon={faStepForward} className={styles.controlIcon} />
                            </button>
                        </div>
                        <div className={styles.right}>
                            <input type="range"
                                className={styles.volume}
                                id='volume'
                                min={0}
                                max={1}
                                step={0.01}
                                // value={1}                // This freezes the cursor bullet
                                onInput={handleInputVolume} />
                            <button className={styles.mute} onClick={handleClickMute}>
                                {
                                    isMuted
                                        ? <FontAwesomeIcon icon={faVolumeMute} className={styles.controlIcon} />
                                        : <FontAwesomeIcon icon={faVolumeUp} className={styles.controlIcon} />
                                }
                            </button>
                        </div>
                    </div>

                ) : null
            }
        </>
    )
}

export default Player
