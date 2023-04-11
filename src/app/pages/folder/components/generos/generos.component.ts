import { ModalController } from '@ionic/angular';
import { Genero } from './../../../../core/models/genero.model';
import { GenerosService } from './../../../../core/services/generos.service';
import { Component, Input, OnInit } from '@angular/core';
import { GeneroDetailComponent } from 'src/app/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss'],
})
export class GenerosComponent implements OnInit {

  @Input() genero?:Genero;
  constructor(
    private generosSvc:GenerosService,
    private modal:ModalController
  ) { }

  ngOnInit() {}

}
