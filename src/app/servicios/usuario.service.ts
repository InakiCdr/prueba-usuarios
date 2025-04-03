import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '..mo'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    private usuarios: Usuario[] = [
      {
        id: 1,
        tipo: 'Demandante',
        nif: '12345678A',
        nombre: 'Juan',
        apellido1: 'Pérez',
        apellido2: 'Gómez',
        genero: 'Masculino',
        fechaNacimiento: '1990-05-15',
        direccion: {
          calle: 'Calle Mayor',
          numero: '10',
          codPostal: '28001',
          ciudad: 'Madrid'
        },
        estudios: [
          { nombre: 'Universidad', titulo: 'Ingeniería Informática', fecha: '2015' }
        ]
      },
      {
        id: 2,
        tipo: 'Empleado',
        nif: '87654321B',
        nombre: 'María',
        apellido1: 'López',
        apellido2: 'Fernández',
        genero: 'Femenino',
        fechaNacimiento: '1985-08-22',
        direccion: {
          calle: 'Avenida del Sol',
          numero: '5',
          codPostal: '28002',
          ciudad: 'Madrid'
        },
        experiencia: [
          { empresa: 'Empresa', puesto: 'Ingeniero', date: '2018-2025' }
        ]
      },
          {
            id: 3,
            tipo: 'Demandante',
            nif: '12345678Z',
            nombre: 'David',
            apellido1: 'Gomez',
            apellido2: 'Arnanz',
            genero: 'Masculino',
            fechaNacimiento: '1970-05-15',
            direccion: {
              calle: 'Calle Jorge Juan',
              numero: '20',
              codPostal: '28001',
              ciudad: 'Madrid'
            },
            estudios: [
              { nombre: 'UAE', titulo: 'Ingeniería Informática', fecha: '1995' }
            ]
          },
          {
            id: 4,
            tipo: 'Empleado',
            nif: '87654321T',
            nombre: 'Lara',
            apellido1: 'Varela',
            apellido2: 'Rodriguez',
            genero: 'Femenino',
            fechaNacimiento: '1984-07-04',
            direccion: {
              calle: 'Avenida nueva',
              numero: '5',
              codPostal: '28002',
              ciudad: 'Madrid'
            },
            experiencia: [
              { empresa: 'Google', puesto: 'Ingeniero', date: '2020-2025' }
            ]
          }
    ];

  constructor() { }


  getUsuarios(): Observable<Usuario[]> {
    return of(this.usuarios);
  }

  getUsuarioPorId(id: number): Observable<Usuario | undefined> {
    return of(this.usuarios.find(usuario => usuario.id === id));
  }

  addUsuario(usuario: Usuario ): void {

    usuario.id = this.usuarios.length +1;
    this.usuarios.push(usuario);

  }

  updateUsuario(usuario: Usuario): void {

   const index = this.usuarios.findIndex(us => u.id === usuario.id);
   if(index!== -1) this.usuarios[index] = usuario;

  }

  deleteUsuario(id: number): void {

    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);

  }
}
