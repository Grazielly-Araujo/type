import {Usuario} from './cadastroUser01';

export class Administrador extends Usuario{

    _token : number;

    constructor(user: string, pass: string, nome: string, sobrenome: string, dataNascimento: string, endereco:string, telefone: string){
    
        super(user, pass, nome, sobrenome, dataNascimento, endereco, telefone);
        this._token = Math.random()*100000;
    }

    public Administrar(): void{
        console.log("Administrando...")
    }
    public GetToken(): number{
        return this._token;
    }
    public VerificarCredenciaisAdministrador(user: string, pass: string, token: number): boolean {
        if(this._token == token){
            return super.VerificarUser(user, pass);
        } else{
            return false;
        }
    }
}