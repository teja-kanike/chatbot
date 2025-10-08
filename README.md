# 🧠 AI Buddy Chatbot  

An intelligent, web-based chatbot application built using **HTML**, **CSS**, **JavaScript**, and **SerpAPI**.  
Users can **sign up, sign in, chat with an AI bot**, and **log out** — all through a clean, responsive interface.

---

## 🚀 Features

✅ **User Authentication** — Sign Up, Sign In, and Logout  
✅ **Chat Interface** — Real-time conversation with avatars and timestamps  
✅ **Bot Integration** — Uses **SerpAPI** for generating answers from live web search  
✅ **Dynamic UI** — Scrollable, modern chat layout built with HTML/CSS/JS  
✅ **Session Management** — Stores logged-in user in `localStorage`

---

## 🏗️ Project Structure

```
AI-Buddy-Chatbot/
│
├── signup.html              # User registration page
├── signin.html              # Login page
├── chat.html                # Chat interface
├── script.js                # JS logic for authentication and chat
├── style1.css               # Signup styling
├── signin_styles.css        # Signin styling
├── style2.css               # Chat styling
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup

### 🧩 Prerequisites
Make sure you have installed:
- A modern browser (Chrome/Edge/Firefox)
- Internet connection (for SerpAPI requests)
- A free [SerpAPI key](https://serpapi.com/)

---

### 🖥️ 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-buddy-chatbot.git
cd ai-buddy-chatbot
```

---

### ⚙️ 2. Run the Project

Simply open `signin.html` in your browser.  
No backend setup is required for local testing.

If you add a backend later (Node.js + Express + SerpAPI),  
run it with:

```bash
node server.js
```

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend (optional)** | Node.js, Express.js |
| **API** | SerpAPI (for AI-like responses) |
| **Storage** | LocalStorage (for demo authentication) |

---

## 💬 Chat Functionality (`script.js`)

- Sends user message to the API endpoint (if backend is used)
- Displays user and bot messages with avatars
- Shows timestamp for every message
- Scrolls automatically to latest message

---

## 🧍 Authentication Flow

| Step | Description |
|------|--------------|
| **Sign Up** | User enters new username and password — stored in localStorage |
| **Sign In** | Credentials are validated — if matched, redirect to chat page |
| **Logout** | Removes username from localStorage and redirects to login page |

---

## 📸 Screenshots

> Add screenshots after testing your app.

1. **Sign Up Page**  
2. **Sign In Page**  
3. **Chat Page (User + Bot Messages)**  
4. **Logout Button View**

---

## 📘 Learning Outcomes

- Implemented **frontend authentication** with LocalStorage  
- Learned **basic API integration** (SerpAPI / OpenAI)  
- Designed **modern UI** with CSS Flexbox  
- Gained hands-on experience in **client-side scripting**  
- Understood **real-world project structure**

---

## ⚡ Future Improvements

- Integrate **OpenAI API** for smarter AI responses  
- Store chat history in a database  
- Add **Dark Mode** and **Voice Support**  
- Deploy app on **Netlify / Vercel**

---

## 🧑‍💻 Author

👤 **Teju**  
📧 your.email@example.com  

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
