# Backend Setup

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=Daaahir8@gmail.com
PORT=5000
```

## Gmail Setup

To use Gmail SMTP, you need to:
1. Enable 2-Step Verification on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password as `SMTP_PASS`

## Running

```bash
npm run dev    # Development mode
npm run build  # Build for production
npm start      # Run production build
```
