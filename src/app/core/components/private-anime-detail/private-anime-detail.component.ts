import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      this.form.controls['id'].setValue(privateAnime.id);
      this.form.controls['name'].setValue(privateAnime.name);
      this.form.controls['rating'].setValue(privateAnime.rating);
      this.form.controls['resumen'].setValue(privateAnime.resumen);
      this.form.controls['fecha'].setValue(privateAnime.fecha);
      this.form.controls['capitulos'].setValue(privateAnime.capitulos);
      this.form.controls['linkVideo'].setValue(privateAnime.linkVideo);
      this.form.controls['picture'].setValue(privateAnime.picture);
      this.mode = "Edit";
    }
  }
  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      rating:[''],
      resumen:[''],
      fecha:[''],
      capitulos:[''],
      linkVideo:[''],
      picture:['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    this.modal.dismiss({privateAnime: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result: any){
    this.modal.dismiss(null, 'cancel');
  }

}