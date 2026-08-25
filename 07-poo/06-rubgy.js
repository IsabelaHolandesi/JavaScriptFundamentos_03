class JogadorRugby{
    constructor(nome, numero, posicao){
        this.nome = nome;
        this.numero = numero;
        this.posicao = posicao;
    }
    correr(){
    console.log(`${this.nome} está correndo com a bola.`);
    }

    PassaBola(){
    console.log(`${this.nome} passou a bola.`);
    }

    mostrarDados(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Número:${this.numero}`);
        console.log(`Posiçao:${this.posicao}`);
    }
}

const jogador1 = new JogadorRugby("Pablo", 10, "Abertura");

jogador1.mostrarDados();
jogador1.correr();
jogador1.PassaBola();

