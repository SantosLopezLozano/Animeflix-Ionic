import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PublicAnimeComponent } from "./components/public-anime/public-anime.component";

@NgModule({
  declarations: [
    PublicAnimeComponent

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
    PublicAnimeComponent
  ]
})
export class CoreModule { }
