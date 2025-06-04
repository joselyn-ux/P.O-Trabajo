import { Estudiante } from "./Estudiante";
import { Computadora } from "./Computadora";
import { Software } from "./Software";
import { Categoria } from "./Categoria";
import { Concurso } from "./Concurso";
import { Laboratorio } from "./Laboratorio";

export class Inscripcion {
  public estudiante: Estudiante;
  public concurso: Concurso;
  public categoria: Categoria;
  public laboratorio: Laboratorio;
  public computadora: Computadora;
  public softwareRequerido: Software[];
  public fechaInscripcion: string;

  constructor(
    estudiante: Estudiante,
    concurso: Concurso,
    categoria: Categoria,
    laboratorio: Laboratorio,
    computadora: Computadora,
    softwareRequerido: Software[],
    fechaInscripcion: string
  ) {
    this.estudiante = estudiante;
    this.concurso = concurso;
    this.categoria = categoria;
    this.laboratorio = laboratorio;
    this.computadora = computadora;
    this.softwareRequerido = softwareRequerido;
    this.fechaInscripcion = fechaInscripcion;
  }

  mostrarDetalle(): string {
    const detalle = [
      `Participante: ${this.estudiante.nombre}`,
      `Matrícula: ${this.estudiante.matricula}`,
      `Concurso: ${this.concurso.nombre}`,
      `Modalidad: ${this.categoria.nombre} (${this.categoria.nivel})`,
      `Laboratorio: ${this.laboratorio.nombre}`,
      `Computadora: ${this.computadora.codigo}`,
      "Software del laboratorio:",
      ...this.laboratorio.softwareInstalado.map((s) => ` - ${s}`),
      "Software requerido por el estudiante:",
      ...this.softwareRequerido.map((s) => ` - ${s}`),
    ];

    return detalle.join("\n");
  }
}