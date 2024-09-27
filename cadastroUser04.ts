import { Usuario } from "./cadastroUser01";
import { Administrador } from "./cadastroUser03";

export interface ILogin{

    Logar(userObj: Usuario, user : string, pass: string): void;
    LogarAdm(userObj: Administrador, user: string, pass: string, token: number): void;


}