import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', title:'inicio', component: InicioComponent},
  { path: 'login', title:'login', component: LoginComponent},
  { path: 'registro', title:'registro', component: RegistroComponent},
];
