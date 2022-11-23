import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PlanDiarioComponent } from './plan-diario/plan-diario.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [

  { path: 'dashboard', component: PlanDiarioComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'planes', component: PlanesComponent },

    { path: '**', redirectTo: 'dashboard' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
