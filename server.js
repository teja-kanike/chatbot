const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// ---------------- USER STORAGE ----------------
let users = []; // temporary in-memory store

// ---------------- SIGNUP ----------------
app.post("/signup", (req, res) => {
    const { username, password, name } = req.body;
    if (!username || !password || !name) return res.json({ success: false, error: "All fields required" });

    const existingUser = users.find(u => u.username === username);
    if (existingUser) return res.json({ success: false, error: "User already exists" });

    users.push({ username, password, name });
    res.json({ success: true });
});

// ---------------- SIGNIN ----------------
app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.json({ success: false, error: "All fields required" });

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.json({ success: false, error: "Invalid username or password" });

    res.json({ success: true, username: user.username });
});

// ---------------- CHAT ----------------
const SERPAPI_API_KEY = "691b3bbf2d570712460c7d91d792d4fafb06d424f6bbeb04ba1feb3f004b12f0";

app.post("/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) return res.json({ reply: "Please type a question." });

    try {
        const response = await axios.get("https://serpapi.com/search.json", {
            params: {
                q: message,
                api_key: SERPAPI_API_KEY
            }
        });

        const answer = response.data.organic_results?.[0]?.snippet || "No results found.";
        res.json({ reply: answer });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.json({ reply: "Error fetching data from SERPAPI." });
    }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
