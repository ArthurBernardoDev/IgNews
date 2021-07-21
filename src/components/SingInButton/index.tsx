import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SingInButton() {
    const isUserLoggerIn = false;


    return isUserLoggerIn ? (
        <button
            className={styles.singInButton}
            type="button">
            <FaGithub color="#04d361" />
            ArthurBernardoDev
            <FiX color="#737380" className={styles.closeIcon} />
        </button>

    ) : (

        <button
            className={styles.singInButton}
            type="button">
            <FaGithub color="#eba417" />
            Sing in with Github
        </button>
    )
}