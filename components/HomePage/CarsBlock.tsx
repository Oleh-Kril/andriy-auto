import styles from "../../styles/HomePage/CarsBlock.module.scss"
import CarCard from "../ui/CarCard";
function CarsBlock(){
    return(
        <section className={styles.section}>
            <CarCard/>
            <CarCard/>
            <CarCard/>

            <CarCard/>
            <CarCard/>
            <CarCard/>
        </section>
    )
}

export default CarsBlock
