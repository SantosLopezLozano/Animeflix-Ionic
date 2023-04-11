import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { PrivateAnime } from '../../models';
import { isLowResolution} from '../../utils/screens.utils';

@Component({
  selector: 'app-private-anime',
  templateUrl: './private-anime.component.html',
  styleUrls: ['./private-anime.component.scss'],
})
export class PrivateAnimeComponent implements OnInit {

  @Output() onDelete = new EventEmitter;
  @Output() onView = new EventEmitter;
  @Input() privateAnime?: PrivateAnime;
  isLowResolution:()=>boolean = isLowResolution;
  constructor() { }

  ngOnInit() {}
  
  viewAnime(){
    this.onView.emit(this.privateAnime);
  }
  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.privateAnime);
  }
}
