const toggleSwitch = document.getElementById('toggleTheme');
const body = document.body;
const container = document.querySelector('.container');
const links = document.querySelectorAll('.links a');

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
    container.classList.toggle('dark-theme');
    links.forEach(link => {
        link.classList.toggle('dark-theme');
    });
});