import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../modelo/usuario';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  filtroUsuario: string = '';


  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {

    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  filtrarUsuarios(): void {
    this.usuarioService.getUsuarios()(usuarios => {
      this.usuarios = this.filtroUsuario ? usuarios.filter(usuario => usuario.type === this.filtroUsuario) : usuarios;
    });
  }

  deleteUsuario(id: number, nombre: string): void {
    if (confirm(`¿Está seguro de que desea borrar el usuario ${nombre}?`)) {
      this.usuarioService.deleteUsuario(id);
      this.cargarUsuarios();
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
