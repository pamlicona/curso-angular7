import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // Crear nuevas directivas, pipes, componentes
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
  ],
  // Cargar módulos, servicios
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // Carga el componente principal con el que la aplicación iniciará
  bootstrap: [AppComponent]
})
export class AppModule { }
