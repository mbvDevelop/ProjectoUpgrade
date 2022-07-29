import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  valorparametre = '';
  usuarios = null;

  nuevoUsuario = {
    idUsuario: 0,
    nombre: "",
    correo: "",
    contraseya: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
