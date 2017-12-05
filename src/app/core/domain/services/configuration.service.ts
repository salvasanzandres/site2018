import {iConfigurationService} from "./contracts/iConfiguration.service";
import {StorageService} from "./storage.service";
import {Inject, Injectable} from "@angular/core";
import {StorageProxy} from "../../infrastructure/proxies/storage.proxy";
import {Observable, BehaviorSubject} from "rxjs";

@Injectable()
export class ConfigurationService implements iConfigurationService{

  public lang: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(@Inject('StorageService') private appStorage: StorageService){
    this.getLanguage().subscribe((response) => {
      response && this.lang.next(response);
    })
  }
  getLanguage(): Observable<string>{
    return this.appStorage.get('ln', StorageProxy.STORES.LOCAL);
  }

  setLanguage(ln: string):void{
    this.appStorage.set('ln', ln);

  }
}
