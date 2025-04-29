import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const langs = {
  en: {label: 'English'},
  // es: {label: 'Español'},
} as const

export type LangCode = keyof typeof langs
export type LangInfo = {label: string, key: LangCode}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly langs = langs

  private _current_lang = new BehaviorSubject<LangCode>('en')
  
  lang$ = this._current_lang.asObservable();

  constructor() {}

  getCurrentLang() : LangCode {
    return this._current_lang.value
  }

  setLang(lang: LangCode) {
    this._current_lang.next(lang);
  }

  getLangList() {
    return (Object.keys(this.langs) as LangCode[]).reduce((list, key)=>{
      list.push({...this.langs[key], key})
      return list;
    }, [] as LangInfo[])
  }

  public get langs_list() {
    return this.getLangList()
  }
}
