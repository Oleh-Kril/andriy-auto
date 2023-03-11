import {Key, useContext, useEffect, useRef, useState} from "react"

import styles from "../../styles/HomePage/BrandBlock.module.scss"
import btnStyles from "../../styles/ui/ButtonWithIcon.module.scss"

import {IFuelCar} from "../../models/FuelCar.module"
import {IElectricCar} from "../../models/ElectricCar.model"

import BrandOption from "./BrandOption"
import ButtonWithIcon from "../ui/ButtonWithIcon"
import {FilterContext} from "../../pages";

type Props = {
    fuelBrands: Array<IFuelCar>,
    electricBrands: Array<IElectricCar>,
}

type ICar = IFuelCar | IElectricCar

function BrandBlock(props: Props) {
    const {isElectricState, setIsElectricState} = useContext(FilterContext)

    const doorRef = useRef(null)
    const upperDoorRef = useRef(null)
    const bottomDoorRef = useRef(null)

    const [brandOptions, setBrandOption] = useState(Array<ICar>)
    const [selectedBrands, setSelectedBrands] = useState(Array<string>)

    useEffect(() => {
        // default options
        setBrandOption(props.fuelBrands)

        // Observer for door animation
        const observer = new IntersectionObserver(([entry]) => {

            // @ts-ignore
            if (entry.isIntersecting && !upperDoorRef.current.classList.contains(styles.visible)) {

                // @ts-ignore
                upperDoorRef.current.classList.add(styles.visible)
                // @ts-ignore
                bottomDoorRef.current.classList.add(styles.visible)
            }
        })
        // @ts-ignore
        observer.observe(doorRef.current)
    }, [])
    useEffect(() => {
        console.log(selectedBrands)
    }, [selectedBrands])

    function onTypeBtnHandler(event: any) {
        const btn = event.target

        if(!btn.classList.contains(btnStyles.active)) {

            const buttons = document.querySelector(`.${styles.type_buttons_container}`)?.children || []
            for (let button of buttons) {
                button.classList.toggle(btnStyles.active)
            }

            if(btn.value === "electric"){
                setBrandOption(props.electricBrands)
                setIsElectricState(true)
            }else{
                setBrandOption(props.fuelBrands)
                setIsElectricState(false)
            }

        }
    }
    return (
        <section className={styles.section}>
            <div className={styles.door}>
                <div ref={upperDoorRef} className={`${styles.upper_door}`}>
                    <img src="door-grid.svg" alt="|-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| "/>
                </div>
                <div ref={bottomDoorRef} className={`${styles.bottom_door}`}>
                    <img ref={doorRef} className={styles.door_teeth} src="door-grid.svg"
                         alt="|-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| "/>
                </div>
            </div>

            <div className={styles.content}>
                <h2 className={styles.title_box}>
                    <span className={styles.title_text}>Бренд</span>
                </h2>
                <div className={styles.type_buttons_container}>
                    <ButtonWithIcon iconName="oil-drop" text="Паливо"
                                    value="fuel"  clickHandler={onTypeBtnHandler} active={true}/>
                    <ButtonWithIcon iconName="lightning" text="Електро"
                                    value="electric" clickHandler={onTypeBtnHandler}/>

                </div>
                <ul className={styles.brands_container}>
                    {brandOptions?.map((option: ICar) =>
                        <BrandOption
                            key={option._id as Key}
                            brand={option.brand.toLowerCase()}
                            brandOptions={selectedBrands}
                            setBrandOption={setSelectedBrands}
                        />)}
                </ul>
            </div>
        </section>
    )
}

export default BrandBlock
