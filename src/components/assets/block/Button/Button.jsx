import styles from "./button.module.scss"
import {ArrowRight} from "../../../SvgImporter"
export const ButtonHovered = (props) => {
    return(
    <div className={styles.button}>
    <div className={styles.button__hovered}>{props.text}
    <ArrowRight/>
    </div>
    </div>
    )
}