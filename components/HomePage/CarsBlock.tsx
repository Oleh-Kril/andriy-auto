import styles from "../../styles/HomePage/CarsBlock.module.scss"
import CarCard from "../ui/CarCard"
import {useContext} from "react";
import {CarsContext, FilterContext} from "../../pages"

function CarsBlock(){
    const {electricCarsState, fuelCarsState} = useContext(CarsContext)
    const {isElectricState} = useContext(FilterContext)

    const cars = isElectricState ? electricCarsState : fuelCarsState

    return(
        <section className={styles.section}>
            {cars.map(car => {
                return(
                    <CarCard car={car} key={car._id.toString()}/>
                )
            })}
        </section>
    )
}

export default CarsBlock
