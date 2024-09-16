/* void */

/* criar um objeto + atributos, pub, prote, priva */
class Animal {
    cor: string;
    idade: number;
    boca: string;

    constructor (){
        this.cor = "marrom";
        this.idade =2; 
        this.boca = "grande";    
    }

    Correr(): void{
        console.log("Correndo...")
    }

    Dormir(): void{
        console.log("Dormindo...")
    }
}

class Cachorro extends Animal {

    constructor(){
        super();
    }
    Latir(): void{
        console.log("AU, AU, AU...")
    }

}
class Gato extends Animal {

    constructor(){
        super();
    }
}



let gato = new Gato();
gato.Correr();
gato.Dormir();

class Pincher extends Cachorro{
    bravo: boolean;
    constructor(){
        super();
    }
}

class Morcego extends Animal{

    frugivero: boolean;

    constructor(){
        super();
        this.frugivero = true;
    }
    Dormir(): void{
        console.log("Dormindo de cabeça para baixo...")
    }
    Comer(): void{
        console.log("Comendo frutas...")
    }

}

let morceguin = new Morcego();
morceguin.Comer();













































