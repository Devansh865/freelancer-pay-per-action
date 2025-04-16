const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");    
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginBtn.addEventListener("click", () => {
      loginBtn.classList.add("active");
      signupBtn.classList.remove("active");
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
});
    
signupBtn.addEventListener("click", () => {
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
});

fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  }).then(res => res.json())
    .then(data => console.log(data));

    
    
    