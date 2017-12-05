

import {Injectable} from "@angular/core";
import {SupportStorage} from "../../domain/models/supportStorage.model";
import {Observable} from "rxjs";



enum STORES {SESSION, LOCAL}

@Injectable()
export class StorageProxy{

  public static STORES = STORES;
  private supportStorage: SupportStorage;

  constructor() {
    this.supportStorage = new SupportStorage();
  }

  /**
   * Select the store
   * @param storage > LocalStorage or SessionStorage
   */
  private _getStore(storage): Storage {
    let store;

    if (storage === StorageProxy.STORES.SESSION && this._isAvailableStorage(window.sessionStorage)) {
      store = window.sessionStorage;
    } else if (storage === StorageProxy.STORES.LOCAL && this._isAvailableStorage(window.localStorage)) {
      store = window.localStorage;
    } else {
      store = this.supportStorage;
    }

    return store;
  }

  private _isAvailableStorage(storage: Storage): boolean{
    var test = 'test';
    try {
      storage.setItem(test, test);
      storage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }

  /**
   * Stores a value in a selected store
   * @param key
   * @param value > Can be a string, an array, an object
   * @param store > default value is SessionStorage
   */
  set(key: string, value: any, store = StorageProxy.STORES.LOCAL): Observable<boolean> {
    const storage = this._getStore(store);

    if (typeof value === 'object') {
      value = this._stringify(value);
    }
    storage.setItem(key, value);

    //return true;
    return Observable.create((observer)=>{
      observer.next(true)
    })
  }

  /**
   * Removes a value in a selected store
   * @param key
   * @param store > default value is SessionStorage
   */
  remove(key: string, store = StorageProxy.STORES.LOCAL): Observable<boolean> {
    const storage = this._getStore(store);
    storage.removeItem(key);
    return Observable.create((observer)=>{
      observer.next(true)
    })
  }

  /**
   * Gets a (nested) value from a store
   * @param key
   * @param defaultValue > default value is false
   * @param nestedKey (optional)
   * @param store > default value is SessionStorage
   */

  get(key: string, store = StorageProxy.STORES.LOCAL, defaultValue: any = false, nestedKey?): Observable<any> {
    const storage = this._getStore(store);

    if (storage.getItem(key)) {
      try {
        let datas = JSON.parse(storage.getItem(key));
        if (nestedKey) {
          datas = datas.hasOwnProperty(nestedKey) ? datas[nestedKey] : defaultValue;
        }
        return datas;
      } catch (e) {
        return Observable.create((observer)=>{
          observer.next(storage.getItem(key))
        })



      }
    } else {
      return defaultValue;
    }
  }


  // OTHERS
  /**
   * TODO Redundant ?
   * Gets string from object value
   * @param value > an object
   */
  private _stringify(value) {
    return JSON.stringify(value);
  }

}
