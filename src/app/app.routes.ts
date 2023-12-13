import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '', title:'inicio', component: InicioComponent},
  { path: 'login', title:'login', component: LoginComponent},
  { path: 'registro', title:'registro', component: RegistroComponent},
  { path: 'admin', title: 'admin', component: AdminComponent}
];
