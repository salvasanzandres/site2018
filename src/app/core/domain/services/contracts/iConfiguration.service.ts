import {Observable} from "rxjs";

export interface iConfigurationService{
  getLanguage(): Observable<string>;
  setLanguage(ln: string):void;
}
