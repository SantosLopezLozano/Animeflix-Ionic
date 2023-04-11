import { PrivateAnime } from './../models/private-anime.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { FirebaseService } from './firebase/firebase-service';
import { DocumentData } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PrivateAnimeService{

  private _privateAnimeSubject:BehaviorSubject<PrivateAnime[]> = new BehaviorSubject([]);
  public _privateAnime$ = this._privateAnimeSubject.asObservable();

  unsubscr;
  constructor(
    private api:ApiService,
    private firebase:FirebaseService
  ) {
    this.unsubscr = this.firebase.subscribeToCollection('privateAnimes',this._privateAnimeSubject, this.mapPrivateAnime);
  }

  ngOnDestroy(): void {
    this.unsubscr();
  }

  private mapPrivateAnime(doc:DocumentData){
    return {
      id:0,
      docId:doc.id,
      name:doc.data().name,
      episodes:doc.data().episodes,
      foto:doc.data().foto,
      description:doc.data().description,
    };
  }
  getPrivateAnime(){
    return this._privateAnimeSubject.value;
  }

  getPrivateAnimeById(id:string):Promise<PrivateAnime>{
    return new Promise<PrivateAnime>(async (resolve, reject)=>{
      try {
        var privateAnime = (await this.firebase.getDocument('privateAnimes', id));
        resolve({
          id:0,
          name:privateAnime.data.name,
          episodes:privateAnime.data.episodes,
          foto:privateAnime.data.foto,
          description:privateAnime.data.description          
        });  
      } catch (error) {
        reject(error);
      }
    });
  }

  addPrivateAnime(privateAnime:PrivateAnime){
    /*privateAnime.id=this.id++;
    this._privateAnime$.push(privateAnime)
    this._privateAnimeSubject.next(this._privateAnime)*/
  }

  deletePrivateAnimeById(id:number){
    /*this._privateAnime$ = this._privateAnime$.filter(p=>p.id != id); 
    this._privateAnimeSubject.next(this._privateAnime);*/
  }
}
