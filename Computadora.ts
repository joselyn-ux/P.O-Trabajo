import { Software } from "./Software";

export class Computadora {
  public id: number;
  public nombre: string;
  public softwareInstalado: Software[];

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.softwareInstalado = [];
  }

  agregarSoftware(software: Software): void {
    this.softwareInstalado.push(software);
  }
}

