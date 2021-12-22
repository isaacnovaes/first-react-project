import React, { useState } from "react";
import styles from "./Form.module.css";
import Input from "./Input";
import Button from "../Button/Button";

export default function Form(props) {
	const [user, setUser] = useState("");
	const [age, setAge] = useState("");

	const getText = input => {
		setUser(input.trim());
		return;
	};
	const getNumber = input => {
		setAge(+input);
		return;
	};

	const submitHandler = event => {
		event.preventDefault();

		if (user === "" || age <= 0) {
			user === "" ? props.onError(true, "user") : props.onError(true, "age");
			return;
		}

		props.onNewUser({ user, age, id: (Math.random() * 101).toString() });

		setUser("");
		setAge("");
	};
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				type="text"
				label="User Name"
				onGetInput={getText}
				value={user}
			></Input>
			<Input
				type="number"
				label="Age"
				onGetInput={getNumber}
				value={age}
			></Input>
			<Button type="submit" text="Add User"></Button>
		</form>
	);
}
