import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { PetsComponent } from './pets/pets.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { SharedModule } from './shared/shared/shared.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    IndicadoresComponent,
    PetsComponent,
    MedicamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
