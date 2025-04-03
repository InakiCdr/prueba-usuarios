export interface Usuario {
  id: number;
  tipo: 'Demandante' | 'Empleado';
  nif: string;
  nombre: string;
  apellido1: string;
  apellido2?: string;
  genero?: string;
  fechaNacimiento?: string;
  direccion?: {
    calle: string;
    numero: string;
    puerta?: string;
    codPostal: string;
    ciudad: string;
  };
  estudios?: { nombre: string; titulo: string; fecha: string }[];
  experiencia?: { empresa: string; puesto: string; fecha: string }[];
}
