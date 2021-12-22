import React from "react";
import styles from "./Input.module.css";

export default function Input(props) {
	const inputHandler = event => {
		props.onGetInput(event.target.value);
	};

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={`${props.type}-input`}>{props.label}</label>
			<input
				type={props.type}
				name={`${props.type}-input`}
				id={`${props.type}-input`}
				onChange={inputHandler}
				value={props.value}
			/>
		</div>
	);
}
