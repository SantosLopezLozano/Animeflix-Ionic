import { Genero } from './../../../core/models/genero.model';
import { GenerosService } from './../../../core/services/generos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss'],
})
export class GenerosComponent implements OnInit {

  @Input() genero?:Genero;
  constructor(
    private generosSvc:GenerosService
  ) { }

  ngOnInit() {}

  getGeneros(){
    return this.generosSvc.generos$;
  }

}
