import Select, {StylesConfig} from "react-select"
import styles from "../../styles/ui/DropDown.module.scss"

export type DropDownOptionType = {
    value: String,
    label: String
}

type Props = {
    options: DropDownOptionType[],
    iconName: string,

    placeHolder: string,
    onChange: (option: readonly DropDownOptionType[]) => void
}
function DropDown(props: Props){
    const main_reverse_color = styles.main_reverse_color as string
    const main_theme_color = styles.main_theme_color as string
    const middle_color = styles.middle_color as string
    const highlight_color = styles.highlight_color as string

    const colourStyles: StylesConfig = {
        control: (styles,{isFocused}) => (
            {
                ...styles,
                backgroundColor: main_reverse_color,
                borderRadius: 0,
                border: 'none',
                boxShadow: 'none',
                '&:hover': {
                    borderColor: main_theme_color
                }
            }),
        option: (styles, { data, isFocused, isSelected }) => {
            return {
                ...styles,
                color: main_theme_color,
                backgroundColor: isFocused ? middle_color : main_reverse_color,

                ':active': {
                ...styles[':active'],
                backgroundColor: isFocused ? middle_color : main_reverse_color
                },
            }
        },
        multiValueRemove: (base, {isFocused}) => ({
            ...base,

            "&:hover": {
                backgroundColor: highlight_color,
                color: main_reverse_color
            }
        }),
        menu: base => ({ ...base, zIndex: 9999 })
    }


    return(
        <div className={styles.container}>
            <img src={`icons/${props.iconName}.svg`} alt={props.iconName}/>
            <Select
                isMulti
                options={props.options}
                placeholder={props.placeHolder}
                styles={colourStyles}
                noOptionsMessage={() => null}
                blurInputOnSelect={false}
                closeMenuOnSelect={false}
                className={styles.select}
                // @ts-ignore
                onChange={props.onChange}
            />
        </div>
    )
}
export default DropDown
