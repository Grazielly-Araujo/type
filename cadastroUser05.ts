import { Usuario } from "./cadastroUser01";
import { Operador } from "./cadastroUser02";
import { Administrador } from "./cadastroUser03";

export interface ICadastro{
    CadastrarUsuario(user: string, pass: string, nome: string, sobrenome: string, dataNascimento: string, endereco:string, telefone: string): Usuario;
    CadastrarOperador(user: string, pass: string, nome: string, sobrenome: string, dataNascimento: string, endereco:string, telefone: string): Operador;
    CadastrarAdministrador(user: string, pass: string, nome: string, sobrenome: string, dataNascimento: string, endereco:string, telefone: string): Administrador;
}