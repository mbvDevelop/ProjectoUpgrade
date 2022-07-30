import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/homeUser/homeUser.component';
import { LibraryComponent } from './pages/library/library.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'HomeUser', component: HomeComponent },
  { path: 'Library', component: LibraryComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Ajustes', component: AjustesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
