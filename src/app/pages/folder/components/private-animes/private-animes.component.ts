import { PrivateAnimeService } from './../../../../core/services/private-animes.service';
import { Component, OnInit } from '@angular/core';
import { PrivateAnime, PrivateAnimeDetailComponent } from 'src/app/core';
import { ModalController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-private-animes',
  templateUrl: './private-animes.component.html',
  styleUrls: ['./private-animes.component.scss'],
})
export class PrivateAnimesComponent implements OnInit {

  constructor(
    private privateAnimeService: PrivateAnimeService,
    private modal: ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() { }

  getPrivateAnime() {
    return this.privateAnimeService._privateAnime$;
  }

  addAnime() {
    this.presentPrivateAnimeForm();
  }
  viewAnime(privateAnime:any){
    this.presentPrivateAnimeForm(privateAnime);
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
            this.privateAnimeService.addPrivateAnime(result.data.privateAnime);
            break;
          default:
        }
      }
    });
  }

  onDeletePrivateAnime(privateAnime:any){
    this.onDeleteAlert(privateAnime);
 }
 async onDeleteAlert(privateAnime:any){
  const alert = await this.alert.create({
    header:'Atención',
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
          this.privateAnimeService.deletePrivateAnimeById(privateAnime.id);
        },
      },
    ],
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
}

}
