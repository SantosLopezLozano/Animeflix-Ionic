import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { PrivateAnime } from '../../models';
import { isLowResolution} from '../../utils/screens.utils';
import { PrivateAnimeService } from '../../services';

@Component({
  selector: 'app-private-anime',
  templateUrl: './private-anime.component.html',
  styleUrls: ['./private-anime.component.scss'],
})
export class PrivateAnimeComponent implements OnInit {

  private _privateAnime:PrivateAnime;
  @Output() onDelete = new EventEmitter;
  @Output() onEdit = new EventEmitter;
  @Output() onView = new EventEmitter;
  @Input() set privateAnime(p:PrivateAnime){
    this._privateAnime = p;
  }
  get privateAnime(){
    return this._privateAnime
  }
  isLowResolution:()=>boolean = isLowResolution;
  constructor(private privateAnimeService:PrivateAnimeService) { }

  ngOnInit() {}

  onEditClick(slide:IonItemSliding){
    slide.close();
    this.onEdit.emit(this.privateAnime);
  }

  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.privateAnime);
  }

  viewAnime(){
    this.onView.emit(this.privateAnime);
  }
}