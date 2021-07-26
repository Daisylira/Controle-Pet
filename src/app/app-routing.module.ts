import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { LoginComponent } from './login/login.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { PetsComponent } from './pets/pets.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'indicadores', component: IndicadoresComponent },
      { path: 'pets', component: PetsComponent },
      { path: 'medicamentos', component: MedicamentosComponent },
    ]

  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
