import { Component, OnInit } from '@angular/core';
import { LoginI } from '../../shared/models/login.interface';
import { ResponseI } from '../../shared/models/response.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });



  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(form: LoginI) {
    this.api.loginByEmail(form).subscribe((data) => {
      let dataResponse: ResponseI = data;
      if (dataResponse.status == 'ok') {
        localStorage.setItem('token', dataResponse.result.token);
        this.router.navigate(['Registro']);
      }
    });
  }
}
