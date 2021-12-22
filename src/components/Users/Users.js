import React from "react";
import styles from "./Users.module.css";
import User from "./User";

export default function Users(props) {
	if (!props.users.length) return <div></div>;

	const displayUsers = props.users.map(user => {
		return (	
			<User
				key={user.id}
				content={`${user.user} (${user.age} ${
					user.age > 10 ? "years" : "year"
				} old)`}
			></User>
		);
	});

	return <div className={styles.usersContainer}>{displayUsers}</div>;
}
