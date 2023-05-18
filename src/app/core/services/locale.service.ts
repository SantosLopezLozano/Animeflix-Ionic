import { Injectable } from '@angular/core';
 
@Injectable({providedIn:'root'})
export class LocaleService {
 constructor() { }
 
 private _locale?: string;
 
 set locale(value: string) {
   this._locale = value;
 }
 get locale(): string {
   return this._locale || 'en-US';
 }
 
 public registerCulture(culture: string) {
   if (!culture) {
     return;
   }
   switch (culture) {
     case 'es':
     case 'es-es':
       this._locale = 'es-es';
       break;  
    
     case 'en-us':
       this._locale = 'en-us';
         break;
     case 'gb':
     case 'en':
     case 'en-uk':
       this._locale = 'en-uk';
       break;
    
     default: {
       this._locale = 'en-uk';
       break;
     }
   }
 }
}
