# EmailJS Integration Setup Guide

## Overview
The WRIM Technologies landing page includes an advanced contact form system with EmailJS integration for sending emails directly from the browser.

## Setup Instructions

### 1. Create an EmailJS Account
1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Configure Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables:
   ```
   Form Type: {{form_type}}
   From: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Company: {{company}}
   
   Project Type: {{project_type}}
   Budget: {{budget}}
   Timeline: {{timeline}}
   Partnership Type: {{partnership_type}}
   
   Message:
   {{message}}
   ```
4. Note down your **Template ID**

### 4. Get Your Public Key
1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Note it down

### 5. Update the Application

Open `/app/frontend/src/pages/ContactForm.jsx` and update line 37-39 with your credentials:

```javascript
// Replace these with your actual EmailJS credentials
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
```

### 6. Uncomment the EmailJS Send Function

In the same file, uncomment line 49:

```javascript
// Change this:
// await emailjs.send(serviceId, templateId, templateParams, publicKey);

// To this:
await emailjs.send(serviceId, templateId, templateParams, publicKey);
```

And comment out or remove the simulation line (line 52):

```javascript
// Remove or comment out:
// await new Promise(resolve => setTimeout(resolve, 1000));
```

## Testing

1. Navigate to the advanced contact form page
2. Select a form type (Project, Partnership, Consultation, or General)
3. Fill out the form fields
4. Click "Send Message"
5. Check your configured email inbox for the message

## Current Status

The contact form is currently working with simulated email sending. Once you add your EmailJS credentials following the steps above, real emails will be sent.

## Form Types Available

1. **Build a Project With Us** - For clients wanting to start a project
2. **Partnership Opportunities** - For potential business partnerships
3. **Book a Consultation** - For scheduling consultations
4. **General Inquiry** - For general questions

Each form type has custom fields relevant to the inquiry type.

## Troubleshooting

### Email not sending
- Verify all three credentials (Service ID, Template ID, Public Key) are correct
- Check your EmailJS dashboard for any errors
- Ensure your email service is properly connected in EmailJS
- Check browser console for error messages

### Template variables not populating
- Make sure template variable names match exactly
- Check that the template is published in EmailJS
- Verify the template ID is correct

## Support

For EmailJS-specific issues, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

For WRIM website issues, contact the development team.
