import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservadorRoutingModule } from './reservador-routing.module';
import { ListarReservasComponent } from './listar-reservas/listar-reservas.component';

import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    ListarReservasComponent
  ],
  imports: [
    CommonModule,
    ReservadorRoutingModule,
    FormsModule,
    DialogModule,
    ToastModule
    
  ], providers: [
    MessageService
  ]
})
export class ReservadorModule { }
