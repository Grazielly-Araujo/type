export class Usuario {
    public static numeroUser: number = 0;
    protected user: string;
    protected pass: string;
    protected nome: string;
    protected sobrenome: string;
    protected dataNascimento: string;
    protected endereco: string;
    protected telefone: string;
    

    constructor(user: string, pass: string, nome: string, sobrenome: string, dataNascimento: string, endereco:string, telefone: string){

        Usuario.numeroUser++;
        this.user = user;
        this.pass = pass;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefone = telefone;

    }
    
    VerificarUser(user:string, pass: string): boolean{
        return this.user == user && this.pass ==pass
    }
    AtualizarCadastro(endereco:string, telefone: string): void{
        this.endereco = endereco;
        this.telefone = telefone;

    }
    MostrarDados(): void{
        console.log(this);
    }
}






















