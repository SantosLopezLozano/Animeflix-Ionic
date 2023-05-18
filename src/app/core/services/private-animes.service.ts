import { PrivateAnime } from './../models/private-anime.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { FirebaseService } from './firebase/firebase-service';
import { DocumentData } from 'firebase/firestore';
import { IonItemSliding } from '@ionic/angular';

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
          docId:privateAnime.id,
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
  
  async deletePrivateAnime(privateAnime:PrivateAnime){
    try {
      await this.firebase.deleteDocument('privateAnimes', privateAnime.docId);  
    } catch (error) {
      console.log(error);
    }
  } 

  async addPrivateAnime(privateAnime:PrivateAnime){
    var _privateAnime = {
      docId:privateAnime.docId,
      name:privateAnime.name,
      description:privateAnime.description,
      episodes:privateAnime.episodes,
      foto:privateAnime.foto
    };
    try {
      await this.firebase.createDocument('privateAnimes', _privateAnime);  
    } finally {}
  }

  async updatePrivateAnime(privateAnime:PrivateAnime){
    var _privateAnime = {
      docId:privateAnime.docId,
      name:privateAnime.name,
      description:privateAnime.description,
      episodes:privateAnime.episodes,
      foto:privateAnime.foto
    };
    try {
      await this.firebase.updateDocument('privateAnimes', privateAnime.docId, _privateAnime);  
    } finally {}
      
  }
}
