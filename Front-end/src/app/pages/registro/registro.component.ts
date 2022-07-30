import { Component, OnInit } from '@angular/core';
import { NgForm , FormBuilder, FormGroup } from '@angular/forms';
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

  file: File

  constructor(private ApiService: ApiService,private router: Router) {}

  ngOnInit(): void {
    //this.resetForm();
  }

  onSubmit(form:NgForm){
    const formData: any = new FormData();
    formData.append("name", this.selectUser.name);
    formData.append("email", this.selectUser.email);
    formData.append("password", this.selectUser.password);
    formData.append("file", this.file);
    this.ApiService.posrtUser(formData).subscribe (
      res =>{
        this.showSuccessMessage= true;
        setTimeout(()=>this.showSuccessMessage= false,3000);
        this.resetForm(form);
        localStorage.setItem('token', res);
        this.serverErrorMessage='';
        this.router.navigate(['Login']);
      }
    )
 }

 onFileChanged(event: Event) {
  const element = event.currentTarget as HTMLInputElement
  let fileList: FileList | null = element.files;
    if (fileList) {
      this.file = fileList[0]
    }
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

