// Login form submission
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
  
    if (data.success) {
      alert("Login successful!");
      window.location.href = data.redirect;
    } else {
      alert("Invalid credentials.");
    }
  });
  
  // Register form submission
  document.getElementById("register-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
  
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });
    const data = await res.json();
  
    if (data.success) {
      alert("Registration successful!");
      window.location.href = "/views/login.html";
    } else {
      alert("Registration failed.");
    }
  });
  