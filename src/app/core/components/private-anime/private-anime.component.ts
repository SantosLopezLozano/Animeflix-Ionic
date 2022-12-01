import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { PrivateAnime } from '../../models';

@Component({
  selector: 'app-private-anime',
  templateUrl: './private-anime.component.html',
  styleUrls: ['./private-anime.component.scss'],
})
export class PrivateAnimeComponent implements OnInit {

  @Output() onView = new EventEmitter;
  @Input() privateAnime?: PrivateAnime;
  constructor() { }

  ngOnInit() {}

  viewAnime(slide:IonItemSliding){
    slide.close();
    this.onView.emit(this.privateAnime);
  }
  onDeleteClick(slide:IonItemSliding){

  }
}
