import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp-auth.mythic-beasts.com',
	port: 587,
	secure: true,
	requireTLS: true,
	auth: {
		user: 'info@cambridgedoughnut.org.uk',
		pass: '2KpL8XMp6&Pe',
	},
});

export default async (req, res) => {
	const { name, email, body } = req.body;
	const from = name && email ? `${name} <${email}>` : `${name || email}`;
	const mailOptions = {
		from: 'Cambridge Doughnut <info@cambridgedoughnut.org.uk>',
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
