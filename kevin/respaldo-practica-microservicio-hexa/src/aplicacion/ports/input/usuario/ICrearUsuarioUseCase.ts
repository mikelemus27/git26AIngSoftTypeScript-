// ===========================================
// INPUT PORT
// CREAR USUARIO
// ===========================================

import { CreateUsuarioRequest } from "../../../dto/CrearUsuarioRequest";

import { UsuarioDTO } from "../../../dto/UsuarioDTO";

export interface ICrearUsuarioUseCase {

execute(
    request: CreateUsuarioRequest
): Promise<UsuarioDTO>;
}