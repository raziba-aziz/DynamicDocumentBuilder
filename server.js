const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password, displayName } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    res.status(201).json({ message: "User created successfully", user: userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route (token verification)
app.post("/login", async (req, res) => {
  const { idToken } = req.body; // Frontend should send Firebase ID token

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).json({ message: "User authenticated", uid: decodedToken.uid });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Logout (handled on frontend)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
