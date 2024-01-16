import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { SolaprobadaComponent } from './components/solaprobada/solaprobada.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '', title:'inicio', component: InicioComponent},
  { path: 'login', title:'login', component: LoginComponent},
  { path: 'registro', title:'registro', component: RegistroComponent},
  { path: 'admin', title: 'admin', component: AdminComponent},
  { path: 'user', title: 'user', component: UserComponent},
  { path: 'solicitud', title: 'solicitud', component: SolicitudComponent},
  { path: 'solaprobada', title: 'solaprobada', component: SolaprobadaComponent}

];
