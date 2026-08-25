class funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
}

class Professor extends funcionario{
    constructor(nome, salario, disciplina){
        super(nome, salario);
        this.disciplina = disciplina;
    }
}

const professor = new Professor("Marcos", 5000, 'Programação');
console.log(professor);