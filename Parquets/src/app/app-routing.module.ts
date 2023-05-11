import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './estructura/Inicio/home/principal/principal.component';
import { LoginComponent } from './estructura/login/login/login.component';
import { BienvenidaComponent } from './estructura/Inicio/bienvenida/bienvenida.component';
import { HomeComponent } from './estructura/Inicio/home/home.component';
import { PresupuestoComponent } from './estructura/menu/presupuesto/presupuesto.component';
import { SimuladorComponent } from './estructura/menu/simulador/simulador.component';
import { NosotrosComponent } from './estructura/menu/nosotros/nosotros.component';
import { ContactoComponent } from './estructura/menu/contacto/contacto.component';
import { TrabajosComponent } from './estructura/menu/trabajos/trabajos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'simulador', component: SimuladorComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'trabajos', component:TrabajosComponent },

  { path: 'account/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
