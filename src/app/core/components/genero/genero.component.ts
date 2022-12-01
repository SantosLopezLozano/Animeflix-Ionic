import { PrivateAnimeService } from './../../services/private-animes.service';
import { PublicAnimeService } from './../../services/public-animes.service';
import { Component, Input, OnInit } from '@angular/core';
import { isLowResolution } from '../../utils/screens.utils';
import { Genero, PrivateAnime, PublicAnime } from '../../models';

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
    private privateAnimeService:PrivateAnimeService
  ) { }

  ngOnInit() {}

  getPublicAnime():PublicAnime{
    var publicAnime = this.genero?.id;
    if(publicAnime)
      return this.publicAnimeService.getPublicAnimeById(publicAnime);
    return undefined;
  }
  getPrivateAnime():PrivateAnime{
    var privateAnime = this.genero?.id;
    if(privateAnime)
      return this.privateAnimeService.getPrivateAnimeById(privateAnime);
    return undefined;
  }

}
