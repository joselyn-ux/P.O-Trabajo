import { Laboratorio } from "./Laboratorio";

export class Categoria {
  public nombre: string;
  public nivel: string;
  public laboratorios: Laboratorio[];

  constructor(nombre: string, nivel: string) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.laboratorios = [];
  }

  agregarLaboratorio(lab: Laboratorio): void {
    this.laboratorios.push(lab);
  }
}
