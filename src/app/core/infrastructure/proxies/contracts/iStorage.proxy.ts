import {Observable} from "rxjs";

export interface IStorageProxy{

  get (key: string, store?, defaultValue?: any, nestedKey?: boolean): Observable<any>;
  set (key: string, value: any, store?):Observable<boolean>;
  remove (key: string, store?):Observable<boolean>;
}
