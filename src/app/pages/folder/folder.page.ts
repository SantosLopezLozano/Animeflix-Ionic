import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService, PrivateAnimeDetailComponent, PrivateAnimeService } from 'src/app/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  //@ViewChild(IonModal) modal: IonModal;
  public folder!: string;
  
  language = 1; // 0 español, 1 inglés
  constructor(
    private user: UserService,
    private locale:LocaleService,
    private translate: TranslateService,
    private router: Router,
    private modal: ModalController,
    private privateAnimeService: PrivateAnimeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  onLanguage(){
    
    this.language = (this.language+1)%2;
    switch(this.language){
      case 0:
        this.translate.setDefaultLang('es');
        this.locale.registerCulture('es');

        break;
      case 1:
        this.translate.setDefaultLang('en');
        this.locale.registerCulture('en');
        break;
    }

  }

  //EL MODAL
  message = 'No se para que es esto poero es temporal así que todo correcto';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  //PROFILE OPTIONS
  openModal(){
    this.presentForm

  }

  //AÑADIR ANIME
  onNewItem(){
    switch(this.folder){
      case 'Home':
        break;
      case 'MyAnimes':
        this.presentForm(PrivateAnimeDetailComponent, (data)=>{
          this.privateAnimeService.addPrivateAnime(data.privateAnime);
        });
        break;
      default:
    }
  }

  async presentForm(_class, onDismiss:(any)=>void){
    const modal = await this.modal.create({
      component:_class,
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        onDismiss(result.data);
      }
    });
  }
  buscar(event){}
}
