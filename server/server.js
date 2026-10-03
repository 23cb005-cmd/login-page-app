const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

const MOCK_USERS = [
  { email: "test@example.com", password: "password123" },
  { email: "admin@nimbusaccess.com", password: "admin1234" },
  { email: "guest@nimbusaccess.com", password: "guestpass" },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required." });
  }

  const user = MOCK_USERS.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid email or password." });
  }

  return res.status(200).json({ success: true, message: "Login successful.", email: user.email });
});

app.get("/", (req, res) => {
  res.send("Nimbus Access mock login API is running.");
});

app.listen(PORT, () => {
  console.log(`Nimbus Access mock login server listening on http://localhost:${PORT}`);
});
