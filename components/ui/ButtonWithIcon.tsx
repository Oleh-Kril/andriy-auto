import styles from "../../styles/ui/ButtonWithIcon.module.scss"
import {MouseEventHandler} from "react"

type Props = {
    iconName: string,
    text: string,
    clickHandler: MouseEventHandler<HTMLButtonElement>,
    value?: string,
    active?: boolean
}
function ButtonWithIcon(props: Props){
    return(
            <button
                className={`${styles.button} ${props?.active ? styles.active : ""}`}
                value={props?.value}
                onClick={props.clickHandler}>

                <img src={`icons/${props.iconName}.svg`} alt={props.iconName}/>
                <h3>{props.text}</h3>
            </button>
    )
}

export default ButtonWithIcon
