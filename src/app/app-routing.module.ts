import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './componentes/listaUsuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './componentes/detalleUsuario/detalle-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularioUsuario/formulario-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuario/new', component: FormularioUsuarioComponent },
  { path: 'usuario/edit/:id', component: FormularioUsuarioComponent },
   { path: '**', redirectTo: '/usuarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
