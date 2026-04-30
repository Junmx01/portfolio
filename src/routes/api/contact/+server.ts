import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import { getSiteConfig } from '$lib/utils/content';

const toEmail = getSiteConfig().email;
const fromEmail = getSiteConfig().resendEmail;

export const POST = async ({ request }) => {
	const resend = new Resend(env.RESEND_API_KEY);
	const { name, email, message } = await request.json();

	const { data, error } = await resend.emails.send({
		from: fromEmail,
		to: toEmail,
		subject: 'New Contact Form Submission',
		text: `This is what the user sent:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
	});

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
	console.log('Email sent successfully');
	return new Response(JSON.stringify({ data }), { status: 200 });
};
