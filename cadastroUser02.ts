import {Usuario} from './cadastroUser01';

export class Operador extends Usuario{

    constructor(user: string, pass: string, nome: string, sobrenome: string, dataNascimento: string, endereco:string, telefone: string){
        super(user, pass, nome, sobrenome, dataNascimento, endereco, telefone)
    }

    public Operador():void{
        console.log("Operando...")
    }
}
