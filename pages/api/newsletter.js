/* eslint-disable no-console */
import axios from 'axios';

/*
4753db0f20 - Join the volunteer community action group now
69e046df6b - Participate in a city-wide consultation once the doughnut is built
46f51a36ec - Learn more about attending one of the Doughnut Hackathons
24a8aa389c - Learn more about how your organisation can get involved
65b9db3d23 - Receive project updates
*/

const getRequestParams = (email, firstName, lastName, selectedOptions) => {
	const API_KEY = process.env.MAILCHIMP_API_KEY;
	const LIST_ID = process.env.MAILCHIMP_LIST_ID;
	const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1];

	const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

	const interests = new Object();
	if (selectedOptions) {
		selectedOptions.map((option) => {
			interests[option] = true;
		});
	}

	const data = {
		email_address: email,
		status: 'subscribed',
		merge_fields: {
			FNAME: firstName,
			LNAME: lastName,
		},
		interests,
	};

	const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Basic ${base64ApiKey}`,
	};

	return {
		url,
		data,
		headers,
	};
};

export default async (req, res) => {
	const { email, firstName, lastName, selectedOptions } = req.body;

	if (!email || !email.length) {
		return res.status(400).json({
			error: 'You forgot to add your email',
		});
	}

	try {
		const { url, data, headers } = getRequestParams(
			email,
			firstName,
			lastName,
			selectedOptions,
		);

		await axios.post(url, data, { headers });

		return res.status(201).json({ error: null });
	} catch (error) {
		console.error(error);
		return res.status(400).json({
			error:
				'Oops, something went wrong. Please send an email to info@cambridgedoughnut.org.uk and we can add you to the list.',
		});
	}
};
