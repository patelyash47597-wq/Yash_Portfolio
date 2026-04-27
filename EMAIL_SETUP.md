# Email Setup Guide for Contact Form

This portfolio uses **EmailJS** to handle contact form submissions. Follow these steps to set up email functionality:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create your account (you can use your Gmail or other email)

## Step 2: Set Up Email Service
1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email account
5. Copy your **Service ID** (looks like: `service_xxxxxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template setup:
   - **Name**: Contact Form
   - **Subject**: New Message from {{from_name}}
   - **Template Content**:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   {{message}}
   ```
4. Copy your **Template ID** (looks like: `template_xxxxxxxxxx`)

## Step 4: Get Your Public Key
1. Go to **Account Settings** (top right)
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

## Step 5: Update Contact.jsx
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Line 18
// Replace 'YOUR_EMAILJS_PUBLIC_KEY' with your actual public key

await emailjs.send(
  'YOUR_SERVICE_ID',      // Line 45 - Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Line 46 - Replace with your template ID
  templateParams
);
```

## Example Values:
```javascript
emailjs.init('your-public-key'); // Your public key

await emailjs.send(
  'service-id',  // Your service ID
  'template-id', // Your template ID
  templateParams
);
```

## Testing
1. Go to your portfolio contact page
2. Fill out the contact form
3. Click "Send Message"
4. You should receive an email at your configured email address

## Troubleshooting
- If you don't receive emails, check EmailJS dashboard for error logs
- Make sure all three IDs (Public Key, Service ID, Template ID) are correct
- Ensure your email service is properly connected in EmailJS
