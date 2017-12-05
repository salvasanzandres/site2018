
import {Inject, Injectable} from '@angular/core';
import {IStorageService} from "./contracts/iStorage.service";
import {IStorageProxy} from "../../infrastructure/proxies/contracts/iStorage.proxy";
import {StorageProxy} from "../../infrastructure/proxies/storage.proxy";
import {Observable} from "rxjs";


@Injectable()
export class StorageService implements IStorageService {

  constructor(@Inject(StorageProxy) private repository: IStorageProxy) {}


  /**
   * Stores a value in a selected store
   * @param key
   * @param value > Can be a string, an array, an object
   * @param store > default value is SessionStorage
   */
  set(key: string, value: any, store?):  Observable<boolean> {
    return this.repository.set(key, value, store);
  }

  /**
   * Removes a value in a selected store
   * @param key
   * @param store > default value is SessionStorage
   */
  remove(key: string, store?): Observable<boolean> {
    return this.repository.remove(key);
  }

  /**
   * Gets a (nested) value from a store
   * @param key
   * @param defaultValue > default value is false
   * @param nestedKey (optional)
   * @param store > default value is SessionStorage
   */

  get(key: string, store?, defaultValue?: any, nestedKey?): Observable<any> {
    return this.repository.get(key, store, defaultValue, nestedKey);
  }

}
