import React from 'react'
import styles from "./Button.module.css"

export default function Button(props) {
    return (
        <div className={styles.buttonContainer}>
            <button type={props.type}>{props.text}</button>
        </div>
    )
}
