class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia(){
        return (this.nota1 + this.nota2) /2;
    }

    verificarSituação(){
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado"
    }

    exibirDados(){
        console.log(`${this.nome} | Média: ${this.calcularMedia() | this.verificarSituação()}`)
    }
}

const alunos = [
  new Aluno("Ana", 9,8),  
  new Aluno("Renan", 5,4),  
  new Aluno("Isabela", 9,10),  
];

alunos.forEach((aluno) => aluno.exibirDados());


