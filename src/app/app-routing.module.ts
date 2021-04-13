import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { PetsComponent } from './pets/pets.component';


const routes: Routes = [
  { path: 'indicadores', component: IndicadoresComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: '',   redirectTo: '/indicadores', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
