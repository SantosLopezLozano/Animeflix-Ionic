import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PublicAnime, PublicAnimeService } from 'src/app/core'
import { IonItemSliding } from '@ionic/angular';
import { isLowResolution} from '../../utils/screens.utils';

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
    private publicAnimeService:PublicAnimeService
  ) { }

  ngOnInit() {}

  onViewClick(slide:IonItemSliding){
    slide.close();
    this.onView.emit(this.publicAnime);
  }

} 
