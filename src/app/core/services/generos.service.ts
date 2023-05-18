import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Genero } from "../models";
import { ApiService } from "./api.service";
import { FirebaseService } from "./firebase/firebase-service";
import { DocumentData } from "firebase/firestore";
import { async } from "@firebase/util";
import { rejects } from "assert";

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private _generos: Genero[] = [];

  private _generosSubject: BehaviorSubject<Genero[]> = new BehaviorSubject([]);
  public generos$ = this._generosSubject.asObservable();


  unsubscr
  constructor(
    private api: ApiService,
    private firebase: FirebaseService
  ) {
    this.unsubscr = this.firebase.subscribeToCollection('generos', this._generosSubject, this.mapGenero)
  }

  ngOnDestroy(): void {
    this.unsubscr();
  }

  private mapGenero(doc: DocumentData) {
    return {
      id: 0,
      docId: doc.id,
      name: doc.data().name,
      publicAnimeId: doc.data().publicAnimeId,
      privateAnimeId: doc.data().privateAnimeId
    }
  }

  getGeneros() {
    return this._generosSubject.value;
  }

  getGeneroById(id: string) {
    return new Promise<Genero>(async (resolve, reject) =>{
        try {
          var response = (await this.firebase.getDocument('generos', id));
          resolve({
            id: 0,
            docId:response.id,
            name:response.data.name,
            publicAnimeId:response.data.publicAnimeId,
            privateAnimeId:response.data.privateAnimeId
          });
        } catch (error){
          reject (error)
        }
      });
    }

  getacion(){
      return this._generos.find(a => a.id == 1)
    }

  deleteGeneroById(id: number) {}

  addGenero(genero: Genero) {}

  updateGenero(genero: Genero) {}
}
