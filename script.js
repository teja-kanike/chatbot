// ----------- SIGNIN LOGIC -----------
const signinForm = document.getElementById("signin-form");
if (signinForm) {
    signinForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        if (!username || !password) return alert("Please enter username and password");

        try {
            const res = await fetch("/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();
            if (data.success) {
                localStorage.setItem("username", data.username);
                window.location.href = "chat.html"; // redirect to chat
            } else {
                alert(data.error);
            }
        } catch (err) {
            alert("Error connecting to server");
            console.error(err);
        }
    });
}
// ----------- CHAT LOGIC -----------
const messagePage = document.getElementById("message-page");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

if (messagePage) {
    const username = localStorage.getItem("username");
    if (!username) window.location.href = "signin.html";

    const userAvatar = "https://i.pravatar.cc/40?img=1"; // user avatar
    const botAvatar = "https://cdn-icons-png.flaticon.com/512/4712/4712027.png"; // AI avatar

    // Add message to chat box
    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);

        const avatarImg = document.createElement("img");
        avatarImg.src = sender === "user" ? userAvatar : botAvatar;
        avatarImg.classList.add("avatar");

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        contentDiv.textContent = text;

        const time = new Date();
        const timeString = time.getHours() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
        const timeSpan = document.createElement("span");
        timeSpan.classList.add("time");
        timeSpan.textContent = timeString;
        contentDiv.appendChild(timeSpan);

        if (sender === "user") {
            messageDiv.appendChild(contentDiv);
            messageDiv.appendChild(avatarImg);
        } else {
            messageDiv.appendChild(avatarImg);
            messageDiv.appendChild(contentDiv);
        }

        messagePage.appendChild(messageDiv);
        messagePage.scrollTop = messagePage.scrollHeight;
    }

    // Send message to server
    async function sendMessage() {
        const message = input.value.trim();
        if (!message) return;

        addMessage(message, "user");
        input.value = "";

        try {
            const res = await fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });
            const data = await res.json();
            addMessage(data.reply, "bot");
        } catch {
            addMessage("Error connecting to server.", "bot");
        }
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

    // Logout button
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("username");
            window.location.href = "signin.html";
        });
    }
}