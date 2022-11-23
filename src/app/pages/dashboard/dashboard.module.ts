import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PlanesComponent } from './planes/planes.component';
import { PlanDiarioComponent } from './plan-diario/plan-diario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PlanesComponent,
    PlanDiarioComponent,
    PerfilComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule

  ]
})
export class DashboardModule { }
