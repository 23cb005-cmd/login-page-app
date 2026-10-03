const MOCK_USERS = [
  { email: "test@example.com", password: "password123" },
  { email: "admin@nimbusaccess.com", password: "admin1234" },
  { email: "guest@nimbusaccess.com", password: "guestpass" },
];

export function checkMockCredentials(email, password) {
  const user = MOCK_USERS.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: "Invalid email or password." };
  }

  return { success: true, message: "Login successful.", email: user.email };
}
