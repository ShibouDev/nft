import React from 'react'
import styles from "./text.module.scss"
import GlitchText from "react-glitch-effect/core/GlitchText"

export const TitleUp = (props) => {
    return (
        <GlitchText
          color1={"#ffb8fe"}
          color2="#AA9CFF"
          duration="5000"
          onHover
          >
        <div className={styles.titleUp}>{props.text}</div>
        </GlitchText>
    )
}
export const TitleDown = (props) => {
    return (
        <GlitchText
          color1={"#ffb8fe"}
          color2="#AA9CFF"
          duration="5000"
          onHover
          >
        <div className={styles.titleDown}>{props.text}</div>
        </GlitchText>
    )
}
export const Desc = (props) => {
    return (
        <div className={styles.desc}>{props.text}</div>
    )
}
