// Comentarios.js

document.getElementById('comentarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;
    const avaliacao = document.getElementById('avaliacao').value;
  
    // Enviar os dados para o servidor
    fetch('/api/comentarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            comentario: comentario,
            avaliacao: avaliacao
        })
    })
    .then(response => response.json())
    .then(data => {
        // Atualizar a lista de comentários
        mostrarComentarios();
    })
    .catch(error => console.error('Erro:', error));
  });
  
  function mostrarComentarios() {
    // Simulação de comentários fake para teste
    const fakeData = [
        { nome: 'João', comentario: 'Ótimo produto!', avaliacao: 5 },
        { nome: 'Maria', comentario: 'Chegou rápido, mas veio com defeito.', avaliacao: 3 },
        { nome: 'Ana', comentario: 'Excelente atendimento.', avaliacao: 4 }
    ];
  
    const comentariosList = document.getElementById('comentariosList');
    comentariosList.innerHTML = '<h3>Comentários Recentes</h3>';
    
    fakeData.forEach(comentario => {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario-item');
        comentarioDiv.innerHTML = `
            <h4>${comentario.nome} <span class="avaliacao">${'★'.repeat(comentario.avaliacao)}</span></h4>
            <p>${comentario.comentario}</p>
        `;
        comentariosList.appendChild(comentarioDiv);
    });
  }
  
  // Inicializa a exibição dos comentários ao carregar a página
  mostrarComentarios();
  