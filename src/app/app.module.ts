import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarUsuariosComponent } from './funci_JeissonO_prueba/gestionar-usuarios/gestionar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    GestionarUsuariosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
