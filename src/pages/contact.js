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


	const handleInputChange = (e) => {

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

	const handleOnBlur = (e) => {

		e.preventDefault();

		if (!fullName) {
			setErrorMessage('Please enter your full name');
			return;
		}

		if (!validateEmail(email)) {
			setErrorMessage('Please enter a valid email address');

			return;

		}

		if (!message) {
			setErrorMessage('Please leave a message');
			return;
		}

		if (fullName && validateEmail(email) && message) {
			setErrorMessage('');
			return;
		}
	};

	const handleFormSubmit = (e) => {

		e.preventDefault();

		if (!fullName) {
			setErrorMessage('Please enter your full name');
			return;
		}

		if (!validateEmail(email)) {
			setErrorMessage('Please enter a valid email address');

			return;

		}

		if (!message) {
			setErrorMessage('Please leave a message');
			return;
		}

		setFullName('');
		setMessage('');
		setEmail('');
		setErrorMessage('');
	};

	return (
		<div className="container w-50">
			<form className='margin-bottom'>
				<div className="form-group mt-5">
					<label htmlFor="exampleFormControlInput1">Full Name</label>
					<input
						value={fullName}
						name="fullName"
						onChange={handleInputChange}
						onBlur={handleOnBlur} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name Here" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Email address</label>
					<input
						value={email}
						name="email"
						onChange={handleInputChange}
						onBlur={handleOnBlur} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlTextarea1">Comment</label>
					<textarea
						value={message}
						name="message"
						onChange={handleInputChange}
						onBlur={handleOnBlur} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				{errorMessage && (
								<div>
									<p className="error-text text-center">
										{errorMessage}
									</p>
								</div>
							)}
				<button type="submit" onClick={handleFormSubmit} className="btn btn-primary mb-5">Submit</button>
			</form>
		</div>
	)
}

export default Contact