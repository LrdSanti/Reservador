import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/inicio', pathMatch: 'full' },
  {
    path: 'inicio', component: InicioComponent,
    children: [
      { path: '', redirectTo: 'inicio/reservador', pathMatch: 'full' },
      { path: 'reservador', loadChildren: () => import('./pages/reservador/reservador.module').then(m => m.ReservadorModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
