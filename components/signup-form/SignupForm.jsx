import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import classnames from 'classnames';
import { useCheckboxes } from '../../hooks/useCheckboxes';
import styles from './SignupForm.module.scss';

const State = {
	IDLE: 'IDLE',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
};

// Note: This list has to stay in sync with the group options in the Mailchimp form
const checkboxesList = [
	{
		id: '4753db0f20',
		label: 'Join the volunteer community action group now',
	},
	{
		id: '69e046df6b',
		label:
			'Participate in a city-wide consultation once the doughnut is built',
	},
	{
		id: '46f51a36ec',
		label: 'Learn more about attending one of the Doughnut Hackathons',
	},
	{
		id: '24a8aa389c',
		label: 'Learn more about how your organisation can get involved',
	},
	{
		id: '65b9db3d23',
		label: 'Receive project updates',
	},
];

const SignupForm = () => {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gdprChecked, setGdprChecked] = useState(false);
	const [state, setState] = useState(State.IDLE);
	const [errorMessage, setErrorMessage] = useState(null);
	const { setCheckbox, checkboxes } = useCheckboxes(checkboxesList);

	const subscribe = async () => {
		setState(State.LOADING);
		setErrorMessage(null);
		try {
			const selectedOptions = checkboxes
				.filter((t) => t.checked)
				.map((c) => c.id);
			console.log({
				email,
				firstName,
				lastName,
				selectedOptions,
			});
			await axios.post('/api/newsletter', {
				email,
				firstName,
				lastName,
				selectedOptions,
			});
			setState(State.SUCCESS);
		} catch (e) {
			setErrorMessage(e.response.data.error);
			setState(State.ERROR);
		}
	};

	const handleGdprChanged = useCallback(() => {
		setGdprChecked((prevState) => !prevState);
	}, []);

	const disableButton = state === State.LOADING || !gdprChecked;

	return (
		<section className={styles.signupForm}>
			<div>
				<input
					className={styles.textInput}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email address"
					value={email}
					autoCapitalize="off"
					autoCorrect="off"
				/>
				<input
					className={styles.textInput}
					onChange={(e) => setFirstName(e.target.value)}
					type="text"
					placeholder="First name"
					value={firstName}
					autoCapitalize="off"
					autoCorrect="off"
				/>
				<input
					className={styles.textInput}
					onChange={(e) => setLastName(e.target.value)}
					type="text"
					placeholder="Last name"
					value={lastName}
					autoCapitalize="off"
					autoCorrect="off"
				/>

				{checkboxes.map((checkbox, i) => (
					<label className={styles.groupCheckbox} key={checkbox.id}>
						<input
							type="checkbox"
							checked={checkbox.checked}
							onChange={(e) => {
								setCheckbox(i, e.target.checked);
							}}
						/>
						{checkbox.label}
					</label>
				))}
				<button
					className={classnames({
						[styles.isDisabled]: disableButton,
					})}
					disabled={disableButton}
					type="button"
					onClick={subscribe}
				>
					Subscribe
				</button>
			</div>
			<label className={styles.gdprLabel} htmlFor="gdpr">
				<input
					className={styles.checkbox}
					checked={gdprChecked}
					id="gdpr"
					onChange={handleGdprChanged}
					type="checkbox"
				/>
				I want to receive emails from Cambridge Doughnut
			</label>

			{state === State.ERROR && (
				<span className={styles.errorMessage}>{errorMessage}</span>
			)}
			{state === State.SUCCESS && (
				<motion.span
					animate={{ opacity: 1 }}
					className={styles.successMessage}
					initial={{ opacity: 0 }}
				>
					Thank you for signing up. You will shortly receive a welcome
					email with more information.
				</motion.span>
			)}
		</section>
	);
};

export default SignupForm;
