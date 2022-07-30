import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [ApiService],
})
export class RegistroComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  selectUser: User = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private ApiService: ApiService,private router: Router) {}

  ngOnInit(): void {
    //this.resetForm();
  }



  onSubmit(form:NgForm){
    this.ApiService.posrtUser (form.value).subscribe (
      res =>{
        this.showSuccessMessage= true;
        setTimeout(()=>this.showSuccessMessage= false,3000);
        this.resetForm(form);
        this.serverErrorMessage='';
        this.router.navigate(['Login']);
      }
    )
 }

 resetForm(form?: NgForm) {
  if (form != null) form.reset;
  this.selectUser = {
    name: '',
    email: '',
    password: '',
  };
  form?.resetForm();
}
  }

