import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PublicAnimeComponent } from "./components/public-anime/public-anime.component";
import { PrivateAnimeComponent } from "./components";

@NgModule({
  declarations: [
    PublicAnimeComponent,
    PrivateAnimeComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  exports:[
    CommonModule,
    FormsModule,
    IonicModule,
    PublicAnimeComponent,
    PrivateAnimeComponent
  ]
})
export class CoreModule { }
