import styles from "../../styles/ui/CarCard.module.scss"
import {IFuelCar} from "../../models/FuelCar.module"
import {IElectricCar} from "../../models/ElectricCar.model"
import {useEffect} from "react";

function CarCard({car}: { car: IFuelCar | IElectricCar } ){
    useEffect(()=>{
        console.log(car)
    }, [])

    return(
        <div className={styles.card}>
            <div className={styles.card__header}>
                <h3>{car.brand + " " + car.model}</h3>
            </div>

            <img className={styles.card__image} src={car.images[0]} alt={"car1"}/>

            <div className={styles.card__price}>
                <span className={styles.card__price__muted}>1 000 000 </span>
                / {car.price + " $"}
            </div>

            <div className={styles.card__properties}>
                <div className={styles.property}>
                    <img src="/icons/calendar.svg" alt="calendar"/>
                    {car.year}
                </div>

                <div className={styles.property}>
                    <img src="/icons/transmission.svg" alt="transmission"/>
                    {car.drive}
                </div>

                <div className={styles.property}>
                    <img src="/icons/gears.svg" alt="gears"/>
                    {car.transmission}
                </div>

                <div className={styles.property}>
                    <img src="/icons/lightning.svg" alt="lightning"/>
                    {car.zeroToHundred}
                </div>

                {/*    NEW LINE    */}

                <div className={styles.property}>
                    <img src="/icons/car-door.svg" alt="car-door"/>
                    {car.bodyType}
                </div>

                <div className={styles.property}>
                    <img src="/icons/engine.svg" alt="engine"/>
                    паливо
                </div>

                <div className={styles.property}>
                    <img src="/icons/people.svg" alt="people"/>
                    {car.capacity}
                </div>
            </div>

        </div>
    )
}

export default CarCard
