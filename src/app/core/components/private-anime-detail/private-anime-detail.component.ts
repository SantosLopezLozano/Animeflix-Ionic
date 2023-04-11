import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrivateAnime } from '../../models';

@Component({
  selector: 'app-private-anime-detail',
  templateUrl: './private-anime-detail.component.html',
  styleUrls: ['./private-anime-detail.component.scss'],
})
export class PrivateAnimeDetailComponent implements OnInit {

  @Input() privateAnime?: PrivateAnime;
  constructor(
    private modal:ModalController
  ) {}

  ngOnInit() {}

  onDismiss(result: any){
    this.modal.dismiss(null, 'cancel');
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
  }

}