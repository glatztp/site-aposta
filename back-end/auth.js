// Armazenamento dos usuários no LocalStorage
function saveUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
}

// Autenticação do usuário
function authenticateUser(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.username === username && user.password === password);
}

// Inicialização: Criar usuário padrão se não existir
if (!localStorage.getItem('users')) {
  saveUser('admin', '123');
}

// Manipulação do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (authenticateUser(username, password)) {
      localStorage.setItem('loggedInUser', username);
      console.log('Login bem-sucedido! Redirecionando para a página principal...');
      window.location.href = 'index.html'; // Redireciona para a página principal
  } else {
      alert('Usuário ou senha incorretos!');
      console.log('Falha no login.');
  }
});
// auth.js

// Verifica se o usuário está autenticado
function checkAuthentication() {
  return !!localStorage.getItem('loggedInUser');
}

// Redireciona para a página de login se não estiver autenticado
function ensureAuthenticated() {
  if (!checkAuthentication()) {
      window.location.href = 'login.html';
  }
}

// Redireciona se necessário
ensureAuthenticated();
// Exemplo de definição de dados do usuário
const user = {
  name: 'João da Silva',
  email: 'joao@example.com',
  phone: '+55 11 98765-4321',
  address: 'Avenida Exemplo, 456, Cidade, Estado'
};

localStorage.setItem('loggedInUser', JSON.stringify(user));
