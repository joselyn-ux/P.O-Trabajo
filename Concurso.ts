import { Categoria } from "./Categoria";

export class Concurso {
  public nombre: string;
  public fecha: string;
  public categorias: Categoria[];

  constructor(nombre: string, fecha: string) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.categorias = [];
  }

  agregarCategoria(categoria: Categoria): void {
    this.categorias.push(categoria);
  }
}