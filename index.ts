interface Conta{
    Numero: number;
    Saldo: number;
    Poupanca?: number;
    Render?(): void;
    Sacar(valor:number): void;
    Depositar(valor:number): void;
}

class Bra implements Conta{
    
    Numero:number;
    Saldo:number;
    constructor(){
        this.Numero = 1234;
        this.Saldo = 1000;
    }

    Sacar(valor:number): void{
        this.Saldo -= valor;
        if(this.Saldo < 0){     
            console.log("Saldo negativo... ERROR!")
        }
        return;
    }

    Depositar(valor:number): void{
        this.Saldo += valor;
        if(valor!== 1000){
            console.log("ERROR, VALOR INCORRETO")
        }else{
            console.log("Novo saldo: ", this.Saldo);
        }
    }


}

let novaConta = new Bra();

novaConta.Depositar(1000);
novaConta.Sacar(2500);





























