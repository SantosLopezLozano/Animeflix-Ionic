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
      picture:"https://1.bp.blogspot.com/-8dgjhV6xB2w/X2J8PcPE1TI/AAAAAAAAWUY/x2bhB62ZWM8AR4RYtPzI-TP0KuSlP0_jQCLcBGAsYHQ/s1920/1_ukHABuwCTiMfgQd-8dCZzA.jpeg"
    },
    {
      id:2,
      name:"Made in abyss",
      rating:"5*",
      resumen:"An Abyss where deams and despair live",
      fecha:"10-10-10",
      picture:"https://www.somosxbox.com/wp-content/uploads/2022/08/Made-in-Abyss-1.jpg"
    },
    {
      id:3,
      name:"Yuru-Camp",
      rating:"5*",
      resumen:"A club where you can go and camp near the fuji mountain with your friends",
      fecha:"10-10-10",
      picture:"https://ramenparados.com/wp-content/uploads/2020/03/Yuru-Camp-2-anime-1000x600.jpg"
    }
    ,
    {
      id:4,
      name:"Chainsawman",
      rating:"5*",
      resumen:"A club where you can go and camp near the fuji mountain with your friends",
      fecha:"10-10-10",
      picture:"https://www.geekmi.news/__export/1630956853471/sites/debate/img/2021/09/06/chainsawman_1.jpg_976912859.jpg"
    }
    ,
    {
      id:5,
      name:"Shuumatsu No Walkyre",
      rating:"5*",
      resumen:"A club where you can go and camp near the fuji mountain with your friends",
      fecha:"10-10-10",
      picture:"https://larepublica.pe/resizer/bA8Bq3M4N52o1J5kV771y335jZw=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/WMZLDAWX5JHE7LRWTP2KJ5UYZM.jpg"
    }
  ];

  private _publicAnimeSubject:BehaviorSubject<PublicAnime[]> = new BehaviorSubject(this._publicAnime);
  public _publicAnime$ = this._publicAnimeSubject.asObservable();
  
  id:number = this._publicAnime.length+1;
  constructor() {

  }
  

  getPublicAnime(){
    return this._publicAnime;
  }

  getPublicAnimeById(id:number){
    return this._publicAnime.find(p=>p.id==id);
  }
  
  viewPublicAnime(publicAnime:PublicAnime){
    var _publicAnime = this._publicAnime.find(p=>p.id==publicAnime.id);
    if(_publicAnime){
      _publicAnime.name = publicAnime.name;
      _publicAnime.rating = publicAnime.rating;
      _publicAnime.fecha = publicAnime.fecha;
      _publicAnime.resumen = publicAnime.resumen;
      _publicAnime.picture = publicAnime.picture
      this._publicAnimeSubject.next(this._publicAnime);
    }  

  }

  addPerson(){

  }
  updatePerson(){
    
  }
}
