import { PrivateAnime } from './../models/private-anime.model';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
      _privateAnime.fecha = privateAnime.fecha;
      _privateAnime.resumen = privateAnime.resumen;
      _privateAnime.picture = privateAnime.picture
      this._privateAnimeSubject.next(this._privateAnime);
    }  

  }

  addPerson(){

  }
  updatePerson(){
    
  }
}
