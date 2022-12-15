import { PrivateAnime } from './../models/private-anime.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateAnimeService{

  private _privateAnime:PrivateAnime[] = [
    {
      id:1,
      name:"PlaceHolder",
      picture:"https://img.freepik.com/vector-gratis/fondo-blanco-gris-brillante-lineas-onduladas_1017-25101.jpg?w=2000"
    }
  ];

  private _privateAnimeSubject:BehaviorSubject<PrivateAnime[]> = new BehaviorSubject(this._privateAnime);
  public _privateAnime$ = this._privateAnimeSubject.asObservable();
  
  id:number = this._privateAnime.length+1;
  constructor() {

  }
  

  getPrivateAnime(){
    return this._privateAnime;
  }

  getPrivateAnimeById(id:number){
    return this._privateAnime.find(p=>p.id==id);
  }
  
  viewPrivateAnime(privateAnime:PrivateAnime){
    var _privateAnime = this._privateAnime.find(p=>p.id==privateAnime.id);
    if(_privateAnime){
      _privateAnime.name = privateAnime.name;
      _privateAnime.rating = privateAnime.rating;
      _privateAnime.resumen = privateAnime.resumen;
      _privateAnime.picture = privateAnime.picture;
      _privateAnime.capitulos = privateAnime.capitulos;
      _privateAnime.linkVideo = privateAnime.linkVideo;
      this._privateAnimeSubject.next(this._privateAnime);
    }    

  }

  addPrivateAnime(privateAnime:PrivateAnime){
    privateAnime.id=this.id++;
    this._privateAnime.push(privateAnime)
    this._privateAnimeSubject.next(this._privateAnime)
  }

  deletePrivateAnimeById(id:number){
    this._privateAnime = this._privateAnime.filter(p=>p.id != id); 
    this._privateAnimeSubject.next(this._privateAnime);
  }
}
