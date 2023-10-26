import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Reservador } from './model/reservador';
import { ActualizarReservaComponent } from './pages/reservador/actualizar-reserva/actualizar-reserva.component';


@NgModule({
  declarations: [
    HeaderComponent,
    InicioComponent,
    ActualizarReservaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ], providers: [
    Reservador
  ]
})
export class DashboardModule { }
