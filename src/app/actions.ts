
'use server';

import { Resend } from 'resend';
import * as z from 'zod';
import { headers } from 'next/headers';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function sendContactEmail(values: z.infer<typeof formSchema>) {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set.');
      return { error: "The email service is not configured. Please contact the site administrator." };
    }

    const validatedFields = formSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields." };
    }
    
    const { name, email, message } = validatedFields.data;

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'Portfolio Visitor <onboarding@resend.dev>',
            to: 'daminis061123@gmail.com',
            subject: `New message from ${name}`,
            html: `
                <p>You have a new message from your portfolio contact form:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });
        return { success: "Message sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { error: "Something went wrong. Please try again." };
    }
}

export async function sendVisitNotificationEmail() {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set for visit notification.');
        return; 
    }

    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 'Not available';
    const userAgent = headersList.get('user-agent') || 'Not available';

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'Portfolio Visitor <onboarding@resend.dev>',
            to: 'daminis061123@gmail.com',
            subject: 'New Portfolio Visit!',
            html: `
                <p>Someone just visited your portfolio.</p>
                <p><strong>IP Address:</strong> ${ip}</p>
                <p><strong>Browser/Device:</strong> ${userAgent}</p>
            `
        });
    } catch (error) {
        console.error("Error sending visit notification email:", error);
    }
}
