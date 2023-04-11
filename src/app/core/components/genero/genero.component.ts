import { PrivateAnimeService } from './../../services/private-animes.service';
import { PublicAnimeService } from './../../services/public-animes.service';
import { Component, Input, OnInit } from '@angular/core';
import { isLowResolution } from '../../utils/screens.utils';
import { Genero, PrivateAnime, PublicAnime } from '../../models';
import { GenerosService } from '../../services';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss'],
})
export class GeneroComponent implements OnInit {

  @Input() genero?:Genero;
  isLowResolution = isLowResolution;
  constructor(
    private publicAnimeService:PublicAnimeService,
    private privateAnimeService:PrivateAnimeService,
  ) { }

  ngOnInit() {}

  /*getPublicAnime(){
    var publicAnime = this.genero?.publicAnime;
    if(publicAnime)
      return this.publicAnimeService.getPublicAnimeById(publicAnime);
    return undefined;
  }
  getPrivateAnime(){
    var privateAnime = this.genero?.privateAnime;
    if(privateAnime)
      return this.privateAnimeService.getPrivateAnimeById(privateAnime);
    return undefined;
  }*/

}
