import {ArrowRight} from "../../../SvgImporter"
import classNames from "classnames"
import "./props.style.css"
export const ButtonHovered = (props) => {
    let btnClass = classNames({
        'hovered': props.hovered,
        'small': props.small,
        'medium': props.medium,
        'large': props.large,
    })
    return(
    <div className="button">
    <div className={btnClass}>
    <div className="text">{props.text}
    <ArrowRight style={{marginLeft: "10px"}}/>
    </div>
    </div>
    </div>
    )
}