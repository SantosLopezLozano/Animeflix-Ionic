import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PublicAnimesDetailComponent, PublicAnimeService} from 'src/app/core';
import { PublicAnime } from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private publicAnimeService:PublicAnimeService,
    private modal:ModalController
  ) { }

  ngOnInit() {}

  getPublicAnime(){
    return this.publicAnimeService._publicAnime$;
  } 
  
  async viewAnime(publicAnime:PublicAnime){
    const modal = await this.modal.create({
      component:PublicAnimesDetailComponent,
      componentProps:{
        publicAnime:publicAnime
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{});
  }
}
