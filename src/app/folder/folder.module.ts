import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HomeComponent } from './components/home/home.component';
import { PrivateAnimesComponent } from "./components/private-animes/private-animes.component";

@NgModule({
    declarations: [FolderPage,
                   HomeComponent,
                   PrivateAnimesComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        CoreModule        
    ]
})
export class FolderPageModule { }
