import {MouseEventHandler} from "react"
import styles from "../../styles/ui/ButtonWithBorder.module.scss"

type Props = {
    text: string,
    clickHandler: MouseEventHandler<HTMLButtonElement>,
    active?: boolean
}
function ButtonWithBorder(props : Props) {
    return (
        <button
            className={`${styles.button} ${props?.active ? styles.active : ""}`}
            onClick={props.clickHandler}>

            <h2>{props.text}</h2>
        </button>
    )
}

export default ButtonWithBorder
