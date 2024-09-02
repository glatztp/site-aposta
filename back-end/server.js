const express = require('express');
const app = express();
const port = 5500;

app.use(express.json());

// Simula um banco de dados de comentários
let comentarios = [
    { nome: 'João', comentario: 'Ótimo produto!', avaliacao: 5, foto: 'default-profile.jpg' },
    { nome: 'Maria', comentario: 'Muito bom, recomendo.', avaliacao: 4, foto: 'default-profile.jpg' }
];

// Endpoint para obter comentários
app.get('/api/comentarios', (req, res) => {
    res.json(comentarios);
});

// Endpoint para adicionar comentários
app.post('/api/comentarios', (req, res) => {
    const { nome, comentario, avaliacao, foto } = req.body;
    const novoComentario = { nome, comentario, avaliacao, foto };
    comentarios.push(novoComentario);
    res.status(201).json(novoComentario);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
