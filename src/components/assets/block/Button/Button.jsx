import styles from "./button.module.scss"
import {ArrowRight} from "../../../SvgImporter"
import classNames from "classnames"
export const ButtonHovered = (props) => {
    let btnClass = classNames({
        'btn-hovered': props.hovered,
        'btn-small': props.small,
        'btn-medium': props.medium,
        'btn-large': props.large,
    })
    return(
    <div className={styles.button}>
    <div className={btnClass}>{props.text}
    <ArrowRight/>
    </div>
    </div>
    )
}