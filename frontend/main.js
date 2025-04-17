const loginBtn = document.getElementById("loginBtn");
const freelancerSignupBtn = document.getElementById("freelancerSignupBtn");
const clientSignupBtn = document.getElementById("clientSignupBtn");

const loginForm = document.getElementById("loginForm");
const freelancerSignupForm = document.getElementById("freelancerSignupForm");
const clientSignupForm = document.getElementById("clientSignupForm");

function deactivateAll() {
  loginBtn.classList.remove("active");
  freelancerSignupBtn.classList.remove("active");
  clientSignupBtn.classList.remove("active");

  loginForm.classList.remove("active");
  freelancerSignupForm.classList.remove("active");
  clientSignupForm.classList.remove("active");
}

loginBtn.addEventListener("click", () => {
  deactivateAll();
  loginBtn.classList.add("active");
  loginForm.classList.add("active");
});

freelancerSignupBtn.addEventListener("click", () => {
  deactivateAll();
  freelancerSignupBtn.classList.add("active");
  freelancerSignupForm.classList.add("active");
});

clientSignupBtn.addEventListener("click", () => {
  deactivateAll();
  clientSignupBtn.classList.add("active");
  clientSignupForm.classList.add("active");
});


// fetch('http://localhost:5000/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password })
//   }).then(res => res.json())
//     .then(data => console.log(data));

    
    
document.getElementById('freelancerSignupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
    walletAddress: form.walletAdress.value
  };

  const res = await fetch('http://localhost:5000/api/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});

document.getElementById('clientSignupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
    companyName: form.companyName.value
  };

  const res = await fetch('http://localhost:5000/api/client/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const credentials = {
    email: form.email.value,
    password: form.password.value
  };

  // Try logging in as freelancer first
  let res = await fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });

  let result = await res.json();

  if (res.ok && result.role === 'freelancer') {
    window.location.href = 'freelancerDash.html';
    return;
  }

  // Try logging in as client
  res = await fetch('http://localhost:5000/api/client/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });

  result = await res.json();

  if (res.ok && result.role === 'client') {
    window.location.href = 'clientDash.html';
  } else {
    alert(result.message || 'Login failed');
  }
});
