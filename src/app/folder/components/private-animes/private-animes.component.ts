import { PrivateAnimeService } from './../../../core/services/private-animes.service';
import { Component, OnInit } from '@angular/core';
import { PrivateAnime, PrivateAnimeDetailComponent } from 'src/app/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-private-animes',
  templateUrl: './private-animes.component.html',
  styleUrls: ['./private-animes.component.scss'],
})
export class PrivateAnimesComponent implements OnInit {

  constructor(
    private privateAnimeService:PrivateAnimeService,
    private modal:ModalController
  ) { }

  ngOnInit() {}

  getPrivateAnime(){
    return this.privateAnimeService._privateAnime$;
  } 
  async viewAnime(privateAnime:PrivateAnime){
    const modal = await this.modal.create({
      component:PrivateAnimeDetailComponent,
      componentProps:{
        privateAnime:privateAnime
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.privateAnimeService.addPerson();
            break;
          case 'Edit':
            this.privateAnimeService.updatePerson();
            break;
          default:
        }
      }
    });
  }

}
