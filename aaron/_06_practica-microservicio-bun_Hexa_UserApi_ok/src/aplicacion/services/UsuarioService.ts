import type { IUsuarioRepositoryPort } from "../ports/output/IUsuarioRepositoryPort";
import { UsuarioDTO } from "../dto/UsuarioDTO";

// CORRECCIÓN: 'C' mayúscula en CreateUsuarioRequest
import { createUsuarioRequest } from "../dto/CreateUsuarioRequest"; 
import { ActualizarUsuarioRequest } from "../dto/ActualizarUsuarioRequest";

import { Usuario } from "../../dominio/entities/Usuario";
import type { ICrearUsuarioUseCase } from "../ports/input/usuario/ICrearUsuarioUseCase";
import type { IActualizarUsuarioUseCase } from "../ports/input/usuario/IActualizarUsuarioUseCase";
import type { IEliminarUsuarioUseCase } from "../ports/input/usuario/IEliminarUsuarioUseCase";
import type { IObtenerUsuarioUseCase } from "../ports/input/usuario/IObtenerUsuarioUseCase";
import type { IListarUsuariosUseCase } from "../ports/input/usuario/IListarUsuarioUseCase";

export class UsuarioService {
  constructor(
    private CrearUsuariosUseCase: ICrearUsuarioUseCase,
    private ObtenerUsuariosUseCase: IObtenerUsuarioUseCase,
    private ListarUsuariosUseCase: IListarUsuariosUseCase,
    private ActualizarUsuariosUseCase: IActualizarUsuarioUseCase,
    private EliminarUsuariosUseCase: IEliminarUsuarioUseCase,
  ) {}

  async listarUsuarios(): Promise<UsuarioDTO[]> {
    // CORRECCIÓN: El UseCase ya devuelve UsuarioDTO[], no es necesario hacer .map()
    return await this.ListarUsuariosUseCase.execute();
  }

  async obtenerUsuario(id: number): Promise<UsuarioDTO | null> {
    // CORRECCIÓN: El UseCase ya devuelve UsuarioDTO | null
    return await this.ObtenerUsuariosUseCase.execute(id);
  }

  async crearUsuario(
    request: createUsuarioRequest
  ): Promise<UsuarioDTO> {
    // CORRECCIÓN: Retorno directo
    return await this.CrearUsuariosUseCase.execute(request);
  }

  async actualizarUsuario(
    id: number,
    request: ActualizarUsuarioRequest
  ): Promise<UsuarioDTO> {
    // CORRECCIÓN: Retorno directo
    return await this.ActualizarUsuariosUseCase.execute(id, request);
  }

  async eliminarUsuario(id: number): Promise<void> {
    await this.EliminarUsuariosUseCase.execute(id);
  }
}