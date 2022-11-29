import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PublicAnimeService} from 'src/app/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private publicAnimeService:PublicAnimeService
  ) { }

  ngOnInit() {}

  getPublicAnime(){
    return this.publicAnimeService._publicAnime$;
  }
}
