function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = 'retro2000';

  if (password === correctPassword) {
    window.location.href = 'https://example.com';
  } else {
    document.getElementById('error-message').textContent = 'Incorrect password!';
  }
}

// Create floating icons
function createFloatingIcons() {
  const iconsContainer = document.querySelector('.floating-icons');

  for (let i = 0; i < 20; i++) {
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.style.left = Math.random() * 100 + 'vw';
    icon.style.animationDelay = Math.random() * 5 + 's';
    icon.style.animationDuration = Math.random() * 10 + 's';
    iconsContainer.appendChild(icon);
  }
}

createFloatingIcons();
