import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  viewAnime(){
    this.onView.emit(this.privateAnime);
    console.log(this.privateAnime?.name)
  }
}
