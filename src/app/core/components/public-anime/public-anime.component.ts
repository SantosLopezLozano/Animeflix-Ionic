import { Component, Input, OnInit, Output } from '@angular/core';
import { PublicAnime, PublicAnimeService } from 'src/app/core'
import { EventEmitter } from 'stream';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-public-anime',
  templateUrl: './public-anime.component.html',
  styleUrls: ['./public-anime.component.scss'],
})
export class PublicAnimeComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() publicAnime:PublicAnime;
  constructor(
    private publicAnimeService:PublicAnimeService
  ) { }

  ngOnInit() {}

  /*onEditClick(slide:IonItemSliding){
    slide.close();
    this.onEdit.emit(this.publicAnime);
  }

  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.publicAnime);
  }*/

}
