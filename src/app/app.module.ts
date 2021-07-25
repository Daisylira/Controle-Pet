import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { PetsComponent } from './pets/pets.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MedicamentosEditModalComponent } from './medicamentos/medicamentos-edit-modal/medicamentos-edit-modal.component';
import { PetsEditComponent } from './pets/pets-edit/pets-edit.component';
import { SharedModule } from './shared/shared.module';
import { PetsAddComponent } from './pets/pets-add/pets-add.component';
import { MedicamentosAddComponent } from './medicamentos/medicamentos-add/medicamentos-add.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    IndicadoresComponent,
    PetsComponent,
    MedicamentosComponent,
    MedicamentosEditModalComponent,
    PetsEditComponent,
    PetsAddComponent,
    MedicamentosAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ChartsModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
