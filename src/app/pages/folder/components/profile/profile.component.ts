import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocaleService } from 'src/app/core';
import { UserService } from 'src/app/core/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/core'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {


  language = 1; // 0 español, 1 inglés
  constructor(
    private user: UserService,    
    private router: Router,
    private locale:LocaleService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {}

  signOut(){
    this.user.signOut();
    this.router.navigate(['login']);
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

}
