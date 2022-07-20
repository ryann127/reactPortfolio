import React, { useState } from 'react';
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




function Contact() {

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
		
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		
		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'fullName') {
			setFullName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

    return (
       
    )
}

export default Contact