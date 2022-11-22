import { PublicAnime } from '../models/public-anime.model';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicAnimeService{

  private _publicAnime:PublicAnime[] = [
    {
      id:1,
      name:"Deca-Dence",
      rating:"5*",
      resumen:"Two worlds, One planet. A young girl meets an android who lost the reason to live",
      fecha:"10-10-10",
      picture:"https://drive.google.com/uc?export=view&id=1_OaTxoyCng4aiMtAiABtWED_S885gdwn"
    }
  ];

  private _peopleSubject:BehaviorSubject<PublicAnime[]> = new BehaviorSubject(this._publicAnime);
  public _people$ = this._peopleSubject.asObservable();
  
  id:number = this._publicAnime.length+1;
  constructor() {

  }
  

  getPublicAnime(){
    return this._publicAnime;
  }

  getPublicAnimeById(id:number){
    return this._publicAnime.find(p=>p.id==id);
  }

  deletePublicAnimeById(id:number){
    this._publicAnime = this._publicAnime.filter(p=>p.id != id); 
    this._peopleSubject.next(this._publicAnime);
  }

  addPublicAnime(publicAnime:PublicAnime){
    publicAnime.id = this.id++;
    this._publicAnime.push(publicAnime);
    this._peopleSubject.next(this._publicAnime);
  }

  updatePublicAnime(publicAnime:PublicAnime){
    var _publicAnime = this._publicAnime.find(p=>p.id==publicAnime.id);
    if(_publicAnime){
      _publicAnime.name = publicAnime.name;
      _publicAnime.fecha = publicAnime.fecha;
      _publicAnime.picture = publicAnime.picture;
      _publicAnime.rating = publicAnime.rating;
      _publicAnime.resumen = publicAnime.resumen;
      this._peopleSubject.next(this._publicAnime);
    }    
  }
}
