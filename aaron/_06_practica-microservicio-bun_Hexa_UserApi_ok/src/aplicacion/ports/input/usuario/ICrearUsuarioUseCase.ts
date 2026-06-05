// ==================================================
// INPUT PORT
// CREAR USUARIO
// ==================================================

import { createUsuarioRequest } 
from "../../../dto/CreateUsuarioRequest";

import { UsuarioDTO } 
from "../../../dto/UsuarioDTO";

export interface ICrearUsuarioUseCase {

  execute(
    request: createUsuarioRequest
  ): Promise<UsuarioDTO>;
}