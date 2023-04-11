import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicAnime } from 'src/app/core'
import { isLowResolution} from '../../utils/screens.utils';

@Component({
  selector: 'app-public-anime',
  templateUrl: './public-anime.component.html',
  styleUrls: ['./public-anime.component.scss'],
})
export class PublicAnimeComponent implements OnInit {

  @Output() onView = new EventEmitter;
  @Input() publicAnime:PublicAnime;
  isLowResolution:()=>boolean = isLowResolution;
  constructor(){}

  ngOnInit() {}

  viewAnime(){
    this.onView.emit(this.publicAnime);
  }
} 
