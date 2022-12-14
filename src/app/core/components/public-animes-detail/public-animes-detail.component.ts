import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { PrivateAnime, PrivateAnimeDetailComponent, PrivateAnimeService, PublicAnime } from 'src/app/core'


@Component({
  selector: 'app-public-animes-detail',
  templateUrl: './public-animes-detail.component.html',
  styleUrls: ['./public-animes-detail.component.scss'],
})
export class PublicAnimesDetailComponent implements OnInit {

  @Input() publicAnime?: PublicAnime;
  constructor(
    private modal:ModalController,
    private privateAnimeService: PrivateAnimeService,
  ) {}

  ngOnInit() {}

  onDismiss(result: any){
    this.modal.dismiss(null, 'cancel');
  }

  addPrivate(){
    this.presentPrivateAnimeForm();
  }
  async presentPrivateAnimeForm(privateAnime?:PrivateAnime){
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
            this.privateAnimeService.addPrivateAnime(result.data.privateAnime);
            break;
          case 'Edit':
            this.privateAnimeService.viewPrivateAnime(result.data.privateAnime);
            break;
          default:
        }
      }
    });
  }

}
