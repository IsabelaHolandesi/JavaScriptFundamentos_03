const alunos = [
    {nome: "Isabela", nota: 10},
    {nome: "Julia", nota: 9},
    {nome: "Larissa", nota: 5},
]

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);