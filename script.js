const b = document.getElementById('darkModeBtn');
b.onclick = () => { document.body.classList.toggle('dark');
    b.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙' };
document.querySelector('form').onsubmit = e => { e.preventDefault();
    alert('Thank you!');
    e.target.reset(); };