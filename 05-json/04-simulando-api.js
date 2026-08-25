const respostaAPI = `[{"id":1, "nome": "Arthur"},{"id":2, "nome": "Nicolas"}]`

const usuarios = JSON.parse(respostaAPI);

usuarios.forEach(aluno => {
        console.log(aluno.nome);
});