# Contact Form with Resend Email Integration

This contact form uses Resend to send form submissions directly to the specified email address.

## Setup Instructions

1. **Create a Resend Account**
   - Sign up at [Resend.com](https://resend.com)
   - Verify your account email

2. **Get an API Key**
   - Go to your Resend dashboard
   - Navigate to API Keys section
   - Create a new API key
   - Copy the API key for the next step

3. **Set up environment variables**
   - Create or update your `.env.local` file with the following variables:
     ```
     RESEND_API_KEY=your_resend_api_key_here
     FROM_EMAIL=info@aarohihrsolutions.com
     TO_EMAIL=sushantsharma.office@gmail.com
     ```
   - The `FROM_EMAIL` should be from a domain you've verified with Resend
   - The `TO_EMAIL` is where form submissions will be sent

4. **Domain Verification (Required for Production)**
   - In your Resend dashboard, navigate to the Domains section
   - Add and verify your domain by following Resend's instructions
   - This is required to send emails from your domain

## Important Notes

- **Email Limitations**: The free tier of Resend has certain limitations on the number of emails you can send
- **Email Templates**: You can enhance the HTML template in the API route for better-looking emails
- **Environment Variables**: Make sure to add these environment variables to your production environment as well

## Troubleshooting

If you experience issues:
1. Check the browser console and server logs for errors
2. Verify your Resend API key is correct
3. Make sure your sending domain is properly verified
4. Test your Resend setup using their API testing tools 