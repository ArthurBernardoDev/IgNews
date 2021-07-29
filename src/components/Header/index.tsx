import { SingInButton } from '../SingInButton'
import styles from './styles.module.scss'
import Image from 'next/image'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image
                    id="imagem"
                    src="/images/logo.svg"
                    width={100}
                    height={20}
                />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>

                <SingInButton />
            </div>
        </header>
    );
}