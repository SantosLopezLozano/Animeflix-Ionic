import { PublicAnime } from '../models/public-anime.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { FirebaseService } from './firebase/firebase-service';
import { DocumentData } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PublicAnimeService{

  private _publicAnimeSubject:BehaviorSubject<PublicAnime[]> = new BehaviorSubject([]);
  public _publicAnime$ = this._publicAnimeSubject.asObservable();

  unsubscr;
  constructor(
    private api:ApiService,
    private firebase:FirebaseService
  ) {
    this.unsubscr = this.firebase.subscribeToCollection('publicAnimes',this._publicAnimeSubject, this.mapPublicAnime);
  }

  ngOnDestroy(): void {
    this.unsubscr();
  }

  private mapPublicAnime(doc:DocumentData){
    return {
      id:0,
      docId:doc.id,
      name:doc.data().name,
      episodes:doc.data().episodes,
      foto:doc.data().foto,
      description:doc.data().description,
    };
  }
  
  getPublicAnime(){
    return this._publicAnimeSubject.value;
  }

  getPublicAnimeById(id:string):Promise<PublicAnime>{
    return new Promise<PublicAnime>(async (resolve, reject)=>{
      try {
        var publicAnime = (await this.firebase.getDocument('publicAnimes', id));
        resolve({
          id:0,
          name:publicAnime.data.name,
          episodes:publicAnime.data.episodes,
          foto:publicAnime.data.foto,
          description:publicAnime.data.description          
        });  
      } catch (error) {
        reject(error);
      }
    });
  }
}
