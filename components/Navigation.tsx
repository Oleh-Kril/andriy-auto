import styles from '../styles/Navigation.module.css'
import Link from "next/link"
import * as ROUTES from "../ROUTES"

function Navigation(){
    return(
        <section className={styles.section}>
            <div className={styles.logo_container}>
                <Link href={ROUTES.Home}>
                    <img className={styles.logo_icon} src="logo.svg" alt="logo"/>
                    <p>andriy <span className="color_text">auto.</span></p>
                 </Link>
            </div>

            <ul className={styles.nav_options}>
                <li className={styles.nav_option}>
                    <Link href={ROUTES.Home}>Всі авто</Link>
                </li>

                <li className={styles.nav_option}>
                    <Link href={ROUTES.OrderACar}>Авто під замовлення</Link>
                </li>

                <li className={styles.nav_option}>
                    <Link href={ROUTES.AboutUs}>Про нас</Link>
                </li>

                <li className={styles.nav_option}>
                    <Link href={ROUTES.Contacts}>Контакти</Link>
                </li>
            </ul>
        </section>
    )
}

export default Navigation
