import { GeneroDetailComponent } from './components';
import { PublicAnimesDetailComponent } from './components/public-animes-detail/public-animes-detail.component';
import { PrivateAnimeDetailComponent } from './components/private-anime-detail/private-anime-detail.component';
import { CommonModule, registerLocaleData } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PublicAnimeComponent } from "./components/public-anime/public-anime.component";
import { PrivateAnimeComponent } from "./components";
import { GeneroComponent } from './components';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core'
import { createTranslateLoader } from './utils/translate';
import { HttpClient } from '@angular/common/http';
import es from '@angular/common/locales/es';
import en from '@angular/common/locales/en';


registerLocaleData(en);
registerLocaleData(es);

@NgModule({
  declarations: [
    PublicAnimeComponent,
    PublicAnimesDetailComponent,
    PrivateAnimeComponent,
    PrivateAnimeDetailComponent,
    GeneroComponent,
    GeneroDetailComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PublicAnimeComponent,
    PrivateAnimeComponent,
    GeneroComponent,
    GeneroDetailComponent
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ]
})
export class CoreModule { }
