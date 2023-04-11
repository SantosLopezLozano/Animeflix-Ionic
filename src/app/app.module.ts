import { LOCALE_ID } from '@angular/core';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './core/utils/translate';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocaleService } from './core';
import { FirebaseService } from './core/services/firebase/firebase-service';
import { FirebaseWebService } from './core/services/firebase/web/firebase-web.service';


export function firebaseServiceFactory() {
  return  new FirebaseWebService();
}
export class LocaleId extends String {
  constructor(private localeService: LocaleService) {
    super();
  }
  
  override toString(): string {
    return this.localeService.locale;
  }
  
  override valueOf(): string {
    return this.toString();
  }
 }
 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    
    AppRoutingModule],
  providers: [
    {
      provide: FirebaseService,
      deps: [],
      useFactory: firebaseServiceFactory
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, 
    { provide: LOCALE_ID, useClass: LocaleId, deps: [LocaleService] }
],
  bootstrap: [AppComponent],
})
export class AppModule { }
