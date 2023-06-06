import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PrivateAnime } from '../../models';

@Component({
  selector: 'app-private-anime-detail',
  templateUrl: './private-anime-detail.component.html',
  styleUrls: ['./private-anime-detail.component.scss'],
})
export class PrivateAnimeDetailComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('privateAnime') set privateAnime(privateAnime:PrivateAnime){
    if(privateAnime){
      this.form.controls.id.setValue(privateAnime.id);
      this.form.controls.docId.setValue(privateAnime.docId);
      this.form.controls.name.setValue(privateAnime.name);
      this.form.controls.episodes.setValue(privateAnime.episodes);
      this.form.controls.description.setValue(privateAnime.description);
      this.form.controls.foto.setValue(privateAnime.foto);
      this.mode = "Edit";
    }
  }
  constructor(
    private modal:ModalController,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id:[null],
      docId:[''],
      name:['', [Validators.required]],
      episodes:['', [Validators.required]],
      description:['', [Validators.required]],
      foto:['', [Validators.required]],
    })
  }

  ngOnInit() {}

  onSubmit(){
    this.modal.dismiss({privateAnime: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result: any){
    this.modal.dismiss(null, 'cancel');
  }

}