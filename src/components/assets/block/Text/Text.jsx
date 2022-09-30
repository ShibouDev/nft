import React from 'react'
import styles from "./text.module.scss"
export const TitleUp = (props) => {
    return (
        <div className={styles.titleUp}>{props.text}</div>
    )
}
export const TitleDown = (props) => {
    return (
        <div className={styles.titleDown}>{props.text}</div>
    )
}
export const Desc = (props) => {
    return (
        <div className={styles.desc}>{props.text}</div>
    )
}
