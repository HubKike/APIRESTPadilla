import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.getCursos()
      //.subscribe(resp => console.log(resp))
      //.suscribe(console.log)
      .subscribe(cursos => this.cursos = cursos);
  }

}