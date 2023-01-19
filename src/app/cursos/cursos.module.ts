import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CursosRoutingModule } from './cursos-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CursoComponent } from './pages/curso/curso.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    CursoComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CursosRoutingModule,
    MaterialModule
  ]
})
export class CursosModule { }
