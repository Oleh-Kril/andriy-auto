import styles from '../styles/Navigation.module.css'
import Link from "next/link"

function Navigation(){
    return(
        <section className={styles.section}>
            <div className={styles.logo_container}></div>

            <ul className={styles.nav_options}>
                <li className={styles.nav_option}>
                    <Link href="/">Всі авто</Link>
                </li>

                <li className={styles.nav_option}>
                    <Link href="/order-a-car">Авто під замовлення</Link>
                </li>

                <li className={styles.nav_option}>
                    <Link href="/about-us">Про нас</Link>
                </li>

                <li className={styles.nav_option}>
                    <Link href="/contacts">Контакти</Link>
                </li>
            </ul>
        </section>
    )
}

export default Navigation
