import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelo/usuario';


@Component({
  selector: 'app-formulario-usuario',
  imports: [],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.scss'
})
export class FormularioUsuarioComponent implements OnInit {
    formularioUsuario!: FormGroup;
    isEditMode = false;
    usuarioId!: number;

  constructor(
    private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.checkEditMode();
  }
  initializeForm(): void {
    this.formularioUsuario = this.fb.group({
      tipo: ['', Validators.required],
      nif: ['', [Validators.required, Validators.pattern(/^[0-9]{8}[A-Za-z]$/)]],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: [''],
      genero: [''],
      fechaNacimiento: [''],
      direccion: this.fb.group({
        calle: [''],
        numero: [''],
        puerta: [''],
        codPostal: [''],
        ciudad: ['']
      }),
      estudios: this.fb.array([]),
      experiencia: this.fb.array([])
    });
  }

  checkEditMode(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.usuarioId) {
      this.isEditMode = true;
      this.servicioUsuario.getUsuarioPorId(this.usuarioId).subscribe(usuario => {
        if (usuario) this.formularioUsuario.patchValue(usuario);
      });
    }
  }



  saveUser(): void {
    if (this.formularioUsuario.invalid) return;
    const usuario: Usuario = { id: this.usuarioId || 0, ...this.formularioUsuario.value };

    if (this.isEditMode) {
      this.servicioUsuario.updateUsuario(usuario);
    } else {
      this.servicioUsuario.addUsuario(usuario);
    }

    this.router.navigate(['/']);
  }
}
