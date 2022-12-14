import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Genero, LocaleService } from 'src/app/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  @Input() algo?:Genero;
  language = 1; // 0 español, 1 inglés
  constructor(
    private translate: TranslateService,
    private locale:LocaleService) { }

  ngOnInit() {}

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

}
