import { AlertController, ModalController } from '@ionic/angular';
import { Genero } from 'src/app/core';
import { GenerosService } from './../../../../core/services/generos.service';
import { Component, Input, OnInit } from '@angular/core';
import { GeneroDetailComponent } from 'src/app/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss'],
})
export class GenerosComponent implements OnInit {

  constructor(
    private generosSvc:GenerosService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getGeneros(){
    return this.generosSvc.generos$
  }

}
