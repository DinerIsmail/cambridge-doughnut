import classnames from 'classnames';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

import styles from './ContactForm.module.scss';

const State = {
	IDLE: 'IDLE',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => EMAIL_REGEX.test(String(email).toLowerCase());

const ContactForm = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [body, setBody] = useState('');
	const [state, setState] = useState(State.IDLE);
	const [errorMessage, setErrorMessage] = useState(null);
	const [isDisabled, setIsDisabled] = useState(true);

	const resetForm = useCallback(() => {
		setEmail('');
		setName('');
		setBody('');
		setIsDisabled(true);
	}, []);

	const sendEmail = useCallback(async () => {
		setState(State.LOADING);
		setErrorMessage(null);
		try {
			const response = await axios.post('/api/send-email', {
				name,
				email,
				body,
			});

			if (response.status === 201) {
				setState(State.SUCCESS);
				resetForm();
			}
		} catch (e) {
			setErrorMessage(e.response.data.error);
			setState(State.ERROR);
		}
	}, [body, email, name, resetForm]);

	const updateButtonState = useCallback(() => {
		setIsDisabled(!email || !validateEmail(email) || !body);
	}, [email, body]);

	const handleEmailChange = useCallback(
		(e) => {
			setEmail(e.target.value);
			updateButtonState();
		},
		[updateButtonState],
	);

	const handleNameChange = useCallback(
		(e) => {
			setName(e.target.value);
			updateButtonState();
		},
		[updateButtonState],
	);

	const handleBodyChange = useCallback(
		(e) => {
			setBody(e.target.value);
			updateButtonState();
		},
		[updateButtonState],
	);

	return (
		<section>
			<form className={styles.root} onSubmit={sendEmail}>
				<input
					onChange={handleEmailChange}
					type="email"
					placeholder="Email"
					value={email}
				/>
				<input
					onChange={handleNameChange}
					type="text"
					placeholder="Name (optional)"
					value={name}
				/>
				<textarea
					className={styles.body}
					onChange={handleBodyChange}
					placeholder="Your question, suggestion or feedback"
					rows={3}
					value={body}
				/>
				<button
					className={classnames(styles.submitButton, {
						[styles.isDisabled]: isDisabled,
					})}
					disabled={isDisabled}
					type="button"
					onClick={sendEmail}
				>
					{state === State.LOADING ? 'Sending...' : 'Send'}
				</button>

				{state === State.ERROR && (
					<span className={styles.errorMessage}>{errorMessage}</span>
				)}

				{state === State.SUCCESS && (
					<motion.span
						animate={{ opacity: 1 }}
						className={styles.successMessage}
						initial={{ opacity: 0 }}
					>
						Thank you for getting in touch. I will reply to you
						shortly.
					</motion.span>
				)}
			</form>
		</section>
	);
};

export default ContactForm;
