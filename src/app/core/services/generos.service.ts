import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Genero } from "../models";

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private _generos: Genero[] = [
    {
      id: 1,
      name: "acción",
      publicAnime: 1
    },
    {
      id: 2,
      name: "fantasía",
      secondName: "romance",
      privateAnime: 1
    }
  ];

  private _generosSubject: BehaviorSubject<Genero[]> = new BehaviorSubject(this._generos);
  public generos$ = this._generosSubject.asObservable();


  id: number = this._generos.length + 1;
  constructor() {

  }

  getGeneros() {
    return this._generos;
  }

  getGeneroById(id: number) {
    return this._generos.find(a => a.id == id);
  }

  getacion(){
    return this._generos.find(a => a.id == 1)
  }

  getGenerosByPrivateAnimeId(privateAnime: number): Genero[] {
    return this._generos.filter(a => a.privateAnime == privateAnime);
  }

  getGenerosByPublicAnimeId(publicAnime: number): Genero[] {
    return this._generos.filter(a => a.publicAnime == publicAnime);
  }

  deleteGeneroById(id: number) {
    this._generos = this._generos.filter(a => a.id != id);
    this._generosSubject.next(this._generos);
  }

  addGenero(genero: Genero) {
    genero.id = this.id++;
    this._generos.push(genero);
    this._generosSubject.next(this._generos);
  }

  updateGenero(genero: Genero) {
    var _genero = this._generos.find(a => a.id == genero.id);
    if (_genero) {
      _genero.id = genero.id;
      _genero.privateAnime = genero.privateAnime;
      _genero.publicAnime = genero.publicAnime;
      _genero.name = genero.name;
    }
    this._generosSubject.next(this._generos);

  }
}
