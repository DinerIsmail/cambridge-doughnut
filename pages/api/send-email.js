import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'cambridgedoughnut@gmail.com',
		pass: process.env.EMAIL_PASSWORD,
	},
});

export default async (req, res) => {
	const { name, email, body } = req.body;
	const from = name && email ? `${name} <${email}>` : `${name || email}`;
	const mailOptions = {
		from: 'cambridgedoughnut@gmail.com',
		to: 'cambridgedoughnut@gmail.com',
		subject: `Contact Form submission from ${from}`,
		replyTo: from,
		text: body,
		html: `<div>${body}</div>`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		return res.status(201).json({ error: null, info });
	} catch (error) {
		console.error(error);
		return res.status(400).json({
			error:
				'Oops, something went wrong. Please send an email to cambridgedoughnut@gmail.com',
		});
	}
};
