import {FilterOptions} from "../../pages/api/filter"
import styles from "../../styles/HomePage/FilterBlock.module.scss"
import {useState} from "react"
import AccordionItem from "../ui/AccordionItem"
import ButtonWithBorder from "../ui/ButtonWithBorder";
import RangeSelector from "../ui/RangeSelector";
import DropDown, {DropDownOptionType} from "../ui/DropDown";

type Props = {
    electricDefaultOptions: FilterOptions,
    fuelDefaultOptions: FilterOptions,
}

function FilterBlock({electricDefaultOptions, fuelDefaultOptions}: Props) {
    const [open, setOpen] = useState(false)

    function getValidOptions(options: Array<String> | Array<Number>): DropDownOptionType[]{
        return options.map(option => {
            return {
                label: String(option),
                value: String(option)
            }
        })
    }
    function onRangeChange({min, max}: {min: Number, max: Number}){
        console.log(min, max)
    }

    function onDropDownChange(option: readonly DropDownOptionType[]){
        console.log(option)
    }
    return (
        <>
            <section className={styles.section__button}>
                <ButtonWithBorder
                    clickHandler={() => setOpen(isOpen => !isOpen)}
                    text={"| Фільтри |"}
                />
            </section>

            <section>
                <AccordionItem open={open} className={styles.section__filters}>

                <div className={styles.range__container}>
                    <RangeSelector iconName={"dollar"} title={"Ціна"}
                                   min={fuelDefaultOptions.price.min}
                                   max={fuelDefaultOptions.price.max}
                                   step={100}
                                   onChange={onRangeChange}
                                   />
                    <RangeSelector iconName={"oil-drop"} title={"Обʼєм двигуна"}
                                   min={fuelDefaultOptions.fuelConsumption?.min || 0}
                                   max={fuelDefaultOptions.fuelConsumption?.max || 0}
                                   step={0.1}
                                   onChange={onRangeChange}
                    />
                    <RangeSelector iconName={"calendar"} title={"Рік випуску"}
                                   min={fuelDefaultOptions.year.min}
                                   max={fuelDefaultOptions.year.max}
                                   step={1}
                                   onChange={onRangeChange}
                    />
                </div>

                <div className={styles.drop__container}>
                    <DropDown options={getValidOptions(fuelDefaultOptions.model)}
                              placeHolder={"Модель"}
                              iconName={"car"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(fuelDefaultOptions.fuelType || [])}
                              iconName={"engine"}
                              placeHolder={"Тип палива"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(fuelDefaultOptions.capacity)}
                              iconName={"people"}
                              placeHolder={"Кількість мість"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(fuelDefaultOptions.bodyType)}
                              iconName={"car-door"}
                              placeHolder={"Тип кузову"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(fuelDefaultOptions.drive)}
                              placeHolder={"Привід"}
                              iconName={"transmission"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(fuelDefaultOptions.transmission)}
                              iconName={"gears"}
                              placeHolder={"Трансмісія"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(fuelDefaultOptions.color)}
                              iconName={"paint"}
                              placeHolder={"Колір"}
                              onChange={onDropDownChange}/>
                </div>
                </AccordionItem>
            </section>
        </>
    )
}

export default FilterBlock
