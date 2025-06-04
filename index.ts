import { Software } from "./Software";
import { Computadora } from "./Computadora";
import { Laboratorio } from "./Laboratorio";
import { Categoria } from "./Categoria";
import { Concurso } from "./Concurso";
import { Estudiante } from "./Estudiante";
import { Inscripcion } from "./Inscripcion";

// Crear software
const vs = new Software("Visual Studio", "2022");
const pg = new Software("PostgreSQL", "15");
const ss = new Software("SQL Server", "2019");

// Crear laboratorio
const lab1 = new Laboratorio(1, "Laboratorio A");
const pc1 = new Computadora(101, "PC-A01");
lab1.agregarComputadora(pc1);
lab1.agregarSoftware(vs);
lab1.agregarSoftware(pg);

// Crear categoría
const cat1 = new Categoria("Lógica Avanzada", "Avanzado");
cat1.agregarLaboratorio(lab1);

// Crear concurso
const concurso1 = new Concurso("Concurso Lógico 2025", "2025-08-12");
concurso1.agregarCategoria(cat1);

// Crear estudiante
const est1 = new Estudiante("María López", "2025001");

// Crear inscripción
const inscripcion1 = new Inscripcion(
  est1,
  concurso1,
  cat1,
  lab1,
  pc1,
  [vs, ss],
  "2025-07-01"
);

console.log(inscripcion1.mostrarDetalle());
