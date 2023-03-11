import {FilterOptions} from "../../pages/api/filter"
import styles from "../../styles/HomePage/FilterBlock.module.scss"
import {useContext, useState} from "react"
import AccordionItem from "../ui/AccordionItem"
import ButtonWithBorder from "../ui/ButtonWithBorder"
import RangeSelector from "../ui/RangeSelector"
import DropDown, {DropDownOptionType} from "../ui/DropDown"
import {FilterContext} from "../../pages"

type Props = {
    electricDefaultOptions: FilterOptions,
    fuelDefaultOptions: FilterOptions,
}

function FilterBlock({electricDefaultOptions, fuelDefaultOptions}: Props) {
    const [open, setOpen] = useState(false)
    const {isElectricState} = useContext(FilterContext)

    const defaultOptions = isElectricState ? electricDefaultOptions : fuelDefaultOptions
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
                                   min={defaultOptions.price.min}
                                   max={defaultOptions.price.max}
                                   step={100}
                                   onChange={onRangeChange}
                                   />
                    {isElectricState ?
                        <RangeSelector iconName={"lightning"} title={"Дальність їзди"}
                                       min={defaultOptions.range?.min || 0}
                                       max={defaultOptions.range?.max || 0}
                                       step={10}
                                       onChange={onRangeChange}
                        />
                            :
                        <RangeSelector iconName={"oil-drop"} title={"Обʼєм двигуна"}
                            min={defaultOptions.fuelConsumption?.min || 0}
                            max={defaultOptions.fuelConsumption?.max || 0}
                            step={0.1}
                            onChange={onRangeChange}
                        />
                    }
                    <RangeSelector iconName={"calendar"} title={"Рік випуску"}
                                   min={defaultOptions.year.min}
                                   max={defaultOptions.year.max}
                                   step={1}
                                   onChange={onRangeChange}
                    />
                </div>

                <div className={styles.drop__container}>
                    <DropDown options={getValidOptions(defaultOptions.model)}
                              placeHolder={"Модель"}
                              iconName={"car"}
                              onChange={onDropDownChange}/>

                    {isElectricState ? null :
                    <DropDown options={getValidOptions(defaultOptions.fuelType || [])}
                              iconName={"engine"}
                              placeHolder={"Тип палива"}
                              onChange={onDropDownChange}/>
                    }

                    <DropDown options={getValidOptions(defaultOptions.capacity)}
                              iconName={"people"}
                              placeHolder={"Кількість мість"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(defaultOptions.bodyType)}
                              iconName={"car-door"}
                              placeHolder={"Тип кузову"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(defaultOptions.drive)}
                              placeHolder={"Привід"}
                              iconName={"transmission"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(defaultOptions.transmission)}
                              iconName={"gears"}
                              placeHolder={"Трансмісія"}
                              onChange={onDropDownChange}/>

                    <DropDown options={getValidOptions(defaultOptions.color)}
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
