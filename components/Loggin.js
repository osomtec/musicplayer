import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Loggin.module.scss';

function Loggin() {
    return (
        <div className={styles.Loggin}>
            <p>
                <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                 Sabino Torres
            </p>
        </div>
    )
}

export default Loggin
