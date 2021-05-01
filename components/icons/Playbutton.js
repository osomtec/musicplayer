import styles from './Playbutton.module.scss'

function Playbutton() {
    return (
        <div className={styles.Playbutton}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.37 177.32" className={styles.theIcon}>
                <g>
                    <path class={styles.iconFill} d="M146.15,76.93L24.76,6.85C15.74,1.64,4.46,8.16,4.46,18.58v140.16c0,10.42,11.28,16.94,20.31,11.73
		                l121.38-70.08C155.17,95.17,155.17,82.15,146.15,76.93z"/>
                </g>
            </svg>
        </div>
    )
}

export default Playbutton