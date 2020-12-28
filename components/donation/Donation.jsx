import React from 'react';

import styles from './Donation.module.scss';

const Donation = () => {
	return (
		<div className={styles.root}>
			<p>
				There are various ways to make a donation to help build the
				Cambridge Doughnut:
			</p>
			<ul>
				<li>One-off payment by direct transfer</li>
				<li>
					By setting up a standing order on-line, using internet
					banking
				</li>
				<li>
					By setting up a standing order by filling in a form and
					sending it to us
				</li>
				<li>By sending us a cheque</li>
			</ul>

			<h2>One-off payment by direct transfer</h2>
			<p>
				If you use <b>internet banking</b>, then you can send us a
				payment. Go to your payment page, click on Make a single payment
				then enter the CamDEAG bank account details. Please{' '}
				<a
					href="mailto:martin.roach1@outlook.com"
					rel="noreferrer"
					target="_blank"
				>
					send us an email too
				</a>{' '}
				so we know who it is from.
			</p>

			<div className={styles.bankingInfo}>
				<div>
					<span>Bank Name</span>
					<span>Account Name</span>
					<span>Sort Code</span>
					<span>Account Number</span>
				</div>
				<div>
					<span>Metro Bank</span>
					<span>CamDEAG</span>
					<span>23-05-80</span>
					<span>39893339</span>
				</div>
			</div>

			<h2>Setting up a standing order online</h2>
			<p>
				If you use internet banking, then you can set up a standing
				order on-line. Go to your payment page, click on "Set up a
				standing order", then enter the CamDEAG bank account details.
				You may be given the option to include a note to show us who the
				donation has come from - please put your name here (or "anon")
				as this will help us keep track of donations when we check our
				bank statement.{' '}
			</p>

			<h2>Send us a donation by cheque</h2>
			<p>
				You can also send us a donation by cheque in the post, made
				payable to "CamDEAG", to this address:
			</p>

			<address>
				<span>CamDEAG</span>
				<span>253 Hills Road</span>
				<span>Cambridge</span>
				<span>CB2 8RP</span>
			</address>

			<p>
				<b>Thank you for your support!</b>
			</p>
		</div>
	);
};

export default Donation;
