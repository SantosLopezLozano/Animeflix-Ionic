import { ModalController } from '@ionic/angular';
import { Genero } from './../../../core/models/genero.model';
import { GenerosService } from './../../../core/services/generos.service';
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

  getGeneros(){
    return this.generosSvc.generos$;
  }

  addGenero() {
    this.presentGeneroForm();
  }

  async presentGeneroForm(genero?:Genero){
    const modal = await this.modal.create({
      component:GeneroDetailComponent,
      componentProps:{
        genero:genero
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.generosSvc.addGenero(result.data.privateAnime);
            break;
          case 'Edit':
            this.generosSvc.addGenero(result.data.privateAnime);
            break;
          default:
        }
      }
    });
  }

}
