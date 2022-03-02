import React, { useState } from "react";
import { getFirestore, getFirebaseTimeStamp } from "../firebase_config";
import ContactForm from "./ContactForm";
import { btnLoading } from "../utilities";

const Contact = () => {
	const [contactStatus, setContactStatus] = useState(false);

	const formDataToJson = (form) => {
		const data = {};
		for (let key of form.keys()) {
			data[key] = form.get(key);
		}
		return data;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		btnLoading("send_contact_button", "Enviando...");
		const db = getFirestore();
		const contactRequestsRef = db.collection("contactRequests");
		const serverTimeStamp = getFirebaseTimeStamp;

		// Convierte la data de formulario en un objeto utilizando FormData()
		const formData = formDataToJson(new FormData(event.target));
		const data = { ...formData, timeStamp: serverTimeStamp };

		contactRequestsRef
			.add(data)
			.then(() => {
				setContactStatus(true);
				event.target.reset();
			})
			.catch((err) => {
				setContactStatus(false);
				console.error(err);
			});
	};

	return <ContactForm handleSubmit={handleSubmit} contactStatus={contactStatus} />;
};

export default Contact;
