import React, { useState, useEffect } from "react";

const GetFakeUsers = () => {
	const [usersList, setUsersList] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api/")
			.then((response) => response.json())
			.then((res) => {
				console.log(res.results);
				setUsersList(res.results);
			});
	}, []);

	return (
		<>
			{usersList.map((user) => (
				<p>{user.name.first}</p>
			))}
		</>
	);
};

export default GetFakeUsers;
