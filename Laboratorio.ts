import { Computadora } from "./Computadora";
import { Software } from "./Software";

export class Laboratorio {
  public id: number;
  public nombre: string;
  public computadoras: Computadora[];
  public softwareGeneral: Software[];

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.computadoras = [];
    this.softwareGeneral = [];
  }

  agregarComputadora(pc: Computadora): void {
    this.computadoras.push(pc);
  }

  agregarSoftware(software: Software): void {
    this.softwareGeneral.push(software);
  }
}
