import { PreciosService } from './servicios/precios.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './estructura/Inicio/bienvenida/bienvenida.component';
import { PrincipalComponent } from './estructura/Inicio/home/principal/principal.component';
import { FooterComponent } from './estructura/Inicio/home/footer/footer.component';
import { LoginComponent } from './estructura/login/login/login.component';
import { NosotrosComponent } from './estructura/menu/nosotros/nosotros.component';
import { TrabajosComponent } from './estructura/menu/trabajos/trabajos.component';
import { ContactoComponent } from './estructura/menu/contacto/contacto.component';
import { MenuComponent } from './estructura/Inicio/home/menu/menu.component';
import { HomeComponent } from './estructura/Inicio/home/home.component';
import { SimuladorComponent } from './estructura/menu/simulador/simulador.component';
import { PresupuestoComponent } from './estructura/menu/presupuesto/presupuesto.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './estructura/menu/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    PrincipalComponent,
    FooterComponent,
    LoginComponent,
    NosotrosComponent,
    TrabajosComponent,
    ContactoComponent,
    MenuComponent,
    FooterComponent,
    PrincipalComponent,
    HomeComponent,
    SimuladorComponent,
   PresupuestoComponent,
   PanelComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule ],
  providers: [PreciosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
