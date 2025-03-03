import express from "express";
import cors from "cors";

const app = express();
const PORT = 5001;

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    const delay = Math.random() * (3000 - 2000) + 2000; // Zufällige Zeit zwischen 2000ms und 3000ms
    setTimeout(next, delay);
});

// Fake-User-Datenbank
const users = {
    "test@example.com": { password: "123456", name: "Test User" },
};

const profile = {
    email: "test@example.com",
    name: "Test User",
    age: 25,
    address: "Test Street 123",
    city: "Test City",
    country: "Test Country",
    phone: "0123456789",
    website: "https://example.com",
    company: "Test Company",
};

// Login-Route
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (users[email] && users[email].password === password) {
        return res.json({
            token: "fake-jwt-token",
            user: { email, name: users[email].name },
        });
    }

    res.status(401).json({ error: "Invalid credentials" });
});

app.get("/profile", (req, res) => {
    return res.json(profile);
})

app.get("/i18n/*.json", (req, res) => {
    console.log(req.url);
    return res.json(profile);
})

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
