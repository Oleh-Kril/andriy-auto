import styles from "../../styles/ui/CarCard.module.scss"
function CarCard(){
    return(
        <div className={styles.card}>
            <div className={styles.card__header}>
                <h3>Tesla model 3</h3>
            </div>

            <img className={styles.card__image} src={"/car1.png"} alt={"car1"}/>

            <div className={styles.card__price}>
                <span className={styles.card__price__muted}>1 000 000 </span>
                / 25 000 $
            </div>

            <div className={styles.card__properties}>
                <div className={styles.property}>
                    <img src="/icons/calendar.svg" alt="calendar"/>
                    2014
                </div>

                <div className={styles.property}>
                    <img src="/icons/transmission.svg" alt="transmission"/>
                    повний
                </div>

                <div className={styles.property}>
                    <img src="/icons/gears.svg" alt="gears"/>
                    автомат
                </div>

                <div className={styles.property}>
                    <img src="/icons/lightning.svg" alt="lightning"/>
                    200 кв.
                </div>

                {/*    NEW LINE    */}

                <div className={styles.property}>
                    <img src="/icons/car-door.svg" alt="car-door"/>
                    седан
                </div>

                <div className={styles.property}>
                    <img src="/icons/engine.svg" alt="engine"/>
                    електричний
                </div>

                <div className={styles.property}>
                    <img src="/icons/people.svg" alt="people"/>
                    4-місний
                </div>
            </div>

        </div>
    )
}

export default CarCard
