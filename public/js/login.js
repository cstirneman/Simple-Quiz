document.getElementById('show-register').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-header').style.display = 'block';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    // If login is successful, the server will redirect
    if (response.ok) {
        window.location.href = '/index.html';
    } else {
        const result = await response.json();
        alert(result.message);
    }
});


document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    // If registration is successful, the server will redirect
    if (response.ok) {
        window.location.href = '/index.html';
    } else {
        const result = await response.json();
        alert(result.message);
    }
});

