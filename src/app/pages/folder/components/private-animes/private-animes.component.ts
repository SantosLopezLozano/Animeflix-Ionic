import { PrivateAnimeService } from './../../../../core/services/private-animes.service';
import { Component, OnInit } from '@angular/core';
import { PrivateAnime, PrivateAnimeDetailComponent } from 'src/app/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-private-animes',
  templateUrl: './private-animes.component.html',
  styleUrls: ['./private-animes.component.scss'],
})
export class PrivateAnimesComponent implements OnInit {

  constructor(
    private privateAnimeService: PrivateAnimeService,
    private modal: ModalController,
    private alert: AlertController
  ) { }

  ngOnInit() { }

  getPrivateAnime() {
    return this.privateAnimeService._privateAnime$;
  }

  async presentPrivateAnimeForm(privateAnime?: PrivateAnime) {
    const modal = await this.modal.create({
      component: PrivateAnimeDetailComponent,
      componentProps: {
        privateAnime: privateAnime
      },
      cssClass: "modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.privateAnimeService.addPrivateAnime(result.data.privateAnime);
            break;
          case 'Edit':
            this.privateAnimeService.updatePrivateAnime(result.data.privateAnime);
            break;
          default:
        }
      }
    });
  }

  onEditAnime(privateAnime) {
    this.presentPrivateAnimeForm(privateAnime)
  }

  async onDeleteAlert(privateAnime) {
    const alert = await this.alert.create({
      header: 'Atención',
      message: '¿Está seguro de que desear este Anime?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.privateAnimeService.deletePrivateAnime(privateAnime);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async onDeletePrivateAnime(privateAnime) {
    this.onDeleteAlert(privateAnime);
  }

  addAnime() {
    this.presentPrivateAnimeForm();
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
    modal.onDidDismiss().then(result=>{});
  }






}
