const toggleBtn = document.querySelectorAll('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const username = document.getElementById('username');
const userName = document.getElementById('user-name');

// Obtener el nombre de usuario desde alguna fuente (por ejemplo, una sesión de usuario)
const currentUser = 'Juan Pérez'; // Ejemplo de nombre de usuario

// Actualizar el nombre de usuario en el mensaje de bienvenida y en el elemento circular
username.textContent = currentUser;
userName.textContent = currentUser;

toggleBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});