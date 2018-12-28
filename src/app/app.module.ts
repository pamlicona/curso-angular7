import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

import { routing, appRoutingProviders } from './app.routing';

import { ConversorPipe } from './pipes/conversor.pipe';


@NgModule({
  // Cargar nuevas directivas, pipes, componentes
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent
  ],
  // Cargar módulos, servicios
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  // Carga el componente principal con el que la aplicación iniciará
  bootstrap: [AppComponent]
})
export class AppModule { }
