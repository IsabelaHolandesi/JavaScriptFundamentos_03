class ContaBancaria {
    #saldo = 0;

    depositar (valor){
        if(valor >0) this.#saldo += valor;
    }

    consultarSaldo(){
        return this.#saldo;
    }
}

const contaTiago = new ContaBancaria();
contaTiago.depositar(100);
console.log(contaTiago.consultarSaldo());