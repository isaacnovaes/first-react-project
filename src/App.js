import React, { useState } from "react";
import styles from "./App.module.css";
import Main from "./components/Main";
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import Modal from "./components/Modal/Modal";

function App() {
	let initialState = [];
	if (sessionStorage.getItem("storedUsers")) {
		initialState = JSON.parse(sessionStorage.getItem("storedUsers"));
	}

	const [users, setUsers] = useState(initialState);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");

	const newUserHandler = newUser => {
		setUsers(prev => {
			const updateUsers = [newUser, ...prev];
			sessionStorage.setItem("storedUsers", JSON.stringify(updateUsers));
			return updateUsers;
		});
	};

	const errorHandler = (err, input) => {
		setMessage(input === "user" ? "Enter a name" : "Enter an age");
		setError(err);
	};

	const closeModal = () => {
		setError(false);
	};

	return (
		<div className={styles.App}>
			<Main>
				<Form onNewUser={newUserHandler} onError={errorHandler} />
				<Users users={users}></Users>
			</Main>
			{!error || <Modal close={closeModal} message={message} />}
		</div>
	);
}

export default App;
