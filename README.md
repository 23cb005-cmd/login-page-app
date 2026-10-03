# Nimbus Access - Login Page

A login page built with a React (Vite) frontend and a Node.js/Express backend, demonstrating
form validation, API communication, and mock authentication.

## Objective

Create a modern, responsive login page with frontend validation, an Express API for
credential checking, and a dashboard redirect on success.

## Structure

- `client/` - React + Vite frontend. Login form, validation, Dashboard page.
- `server/` - Express backend exposing `POST /api/login` against a static mock user list.

## Running the full stack locally

```bash
# terminal 1
cd server
npm install
npm start      # runs on http://localhost:4000

# terminal 2
cd client
npm install
npm run dev     # runs on http://localhost:5173
```

With both running, the login form posts to the real Express API at `http://localhost:4000/api/login`.

## How the deployed demo works

GitHub Pages only serves static files, so it cannot host the Express server. The client is
written to first try the real API call, and if that request fails (as it always will on the
static GitHub Pages deployment, since there is no server to reach), it automatically falls
back to an identical mock-credential check that runs entirely in the browser
(`client/src/api/mockAuth.js`). This means the deployed demo is fully functional on its own,
while the real Express backend in `server/` still works for local full-stack development.

## Demo / test credentials

Use any of the following on either the live demo or the local full-stack version:

| Email                        | Password     |
|-------------------------------|--------------|
| test@example.com              | password123  |
| admin@nimbusaccess.com        | admin1234    |
| guest@nimbusaccess.com        | guestpass    |

Any other combination will show an "Invalid email or password" error.

## Validation rules

- Email and password are both required.
- Email must match a basic valid-email pattern.
- Password must be at least 6 characters.

On success, the app shows a placeholder Dashboard with a welcome message and a logout button.
