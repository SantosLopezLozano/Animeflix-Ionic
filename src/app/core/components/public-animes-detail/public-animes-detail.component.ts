import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { PublicAnime } from 'src/app/core'


@Component({
  selector: 'app-public-animes-detail',
  templateUrl: './public-animes-detail.component.html',
  styleUrls: ['./public-animes-detail.component.scss'],
})
export class PublicAnimesDetailComponent implements OnInit {

  @Input() publicAnime?: PublicAnime;
  constructor(
    private modal:ModalController
  ) { }

  ngOnInit() {}

  onDismiss(result: any){
    this.modal.dismiss(null, 'cancel');
  }

}
