import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicAnime, PublicAnimeService } from 'src/app/core'
import { isLowResolution} from '../../utils/screens.utils';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-public-anime',
  templateUrl: './public-anime.component.html',
  styleUrls: ['./public-anime.component.scss'],
})
export class PublicAnimeComponent implements OnInit {

  @Output() onView = new EventEmitter;
  @Input() publicAnime?: PublicAnime;
  isLowResolution:()=>boolean = isLowResolution;
  constructor(
    private alertController:AlertController,
    private publicAnimeService:PublicAnimeService
  ) { }

  ngOnInit() {}

  viewAnime(){
    this.onView.emit(this.publicAnime);
    console.log(this.publicAnime?.name)
  }

  /*async viewAnime() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-alert',
      header: this.publicAnime?.name,
      message: this.publicAnime?.resumen,
      buttons: ['Close'],
    });

    await alert.present();
  }*/

} 
