import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

export default function Modal(props) {
	const closeModalButtonHandler = event => {
		if (event.target.classList.contains(`${styles.modal}`)) {
			props.close();
		}

		if (event.target.type === "button") props.close();
	};

	return (
		<div className={styles.modal} onClick={closeModalButtonHandler}>
			<section className={styles.information}>
				<h1>Invalid Input</h1>
				<div className={styles.description}>
					<h3>{props.message}</h3>
					<Button type="button" text="Okay"></Button>
				</div>
			</section>
		</div>
	);
}
