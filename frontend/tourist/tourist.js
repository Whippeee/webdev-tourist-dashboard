function registerTourist() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    document.getElementById("msg").innerText = "All fields required";
    return;
  }

  fetch("http://localhost:3000/api/tourists/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("msg").innerText = data.message;
    })
    .catch(() => {
      document.getElementById("msg").innerText = "Server error";
    });
}
