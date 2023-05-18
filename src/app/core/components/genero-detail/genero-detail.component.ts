import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Genero } from '../../models';

@Component({
  selector: 'app-genero-detail',
  templateUrl: './genero-detail.component.html',
  styleUrls: ['./genero-detail.component.scss'],
})
export class GeneroDetailComponent implements OnInit {
  

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('genero') set genero(genero:Genero){
    if(genero){
      this.form.controls['id'].setValue(genero.id);
      this.form.controls['name'].setValue(genero.name);
      this.mode = "Edit";
    }
  }constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
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
