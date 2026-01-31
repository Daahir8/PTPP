# Backend Setup

## Environment Variables

The `.env` file has been created. You need to update it with your Gmail credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com          # ← Replace with your Gmail address
SMTP_PASS=your-app-password              # ← Replace with Gmail App Password
CONTACT_EMAIL=Daahir.ibraahim89@gmail.com  # ← Already set correctly
PORT=5000
```

## Gmail Setup (REQUIRED)

To send emails, you MUST configure Gmail:

1. **Enable 2-Step Verification** on your Google account:
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)" → Enter "E-Salax Web"
   - Copy the 16-character password generated

3. **Update `.env` file**:
   - Open `backend/.env`
   - Replace `SMTP_USER` with your Gmail address
   - Replace `SMTP_PASS` with the App Password you just generated
   - Save the file

4. **Restart the backend server** for changes to take effect

## Running

```bash
npm run dev    # Development mode
npm run build  # Build for production
npm start      # Run production build
```
