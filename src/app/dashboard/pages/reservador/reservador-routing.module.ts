import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarReservasComponent } from './listar-reservas/listar-reservas.component';
import { ActualizarReservaComponent } from './actualizar-reserva/actualizar-reserva.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'listarReservas', component: ListarReservasComponent },
      { path: 'actualizarReserva/:id', component: ActualizarReservaComponent },
      { path: '**', redirectTo: 'listarReservas' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservadorRoutingModule { }
