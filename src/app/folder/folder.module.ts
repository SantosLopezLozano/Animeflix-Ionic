import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomeComponent } from './components/home/home.component';
import { PrivateAnimesComponent } from "./components/private-animes/private-animes.component";
import { GenerosComponent } from './components/generos/generos.component';
import { SettingsComponent } from './components/settings/settings.component';


import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../core/utils/translate';

@NgModule({
    declarations: [
        FolderPage,
        HomeComponent,
        PrivateAnimesComponent,
        GenerosComponent,
        SettingsComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        FolderPageRoutingModule,
        CoreModule,
        TranslateModule.forChild({
          loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
          }
          }),
    ]
})
export class FolderPageModule { }
