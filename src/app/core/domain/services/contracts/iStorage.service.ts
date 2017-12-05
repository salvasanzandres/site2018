import {Observable} from "rxjs";

export interface IStorageService{

  get (key: string, store?: Storage, defaultValue?: any, nestedKey?: boolean): Observable<any>;
  set (key: string, value: any, store?: Storage): Observable<boolean>;
  remove (key: string, store?: Storage): Observable<boolean>;
}
