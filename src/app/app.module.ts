import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveCategoriaComponent } from './components/categoria/save-categoria/save-categoria.component';
import { UpdateCategoriaComponent } from './components/categoria/update-categoria/update-categoria.component';
import { DeleteCategoriaComponent } from './components/categoria/delete-categoria/delete-categoria.component';
import { GetCategoriaComponent } from './components/categoria/get-categoria/get-categoria.component';
import { GetCategoriasComponent } from './components/categoria/get-categorias/get-categorias.component';

// Importar rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaveCategoriaComponent,
    UpdateCategoriaComponent,
    DeleteCategoriaComponent,
    GetCategoriaComponent,
    GetCategoriasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
