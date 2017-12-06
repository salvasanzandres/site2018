import {iConfigurationService} from "./contracts/iConfiguration.service";
import {StorageService} from "./storage.service";
import {Inject, Injectable} from "@angular/core";
import {StorageProxy} from "../../infrastructure/proxies/storage.proxy";
import {Observable, BehaviorSubject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class ConfigurationService implements iConfigurationService{

  public lang: BehaviorSubject<string> = new BehaviorSubject(null);
  public avaliableLang : string[] = ['fr','en','es'];
  public isPhone: boolean = false;

  constructor(@Inject('StorageService') private appStorage: StorageService,
              private translateService: TranslateService ){
    if(this.getLanguage()){
      this.getLanguage().subscribe((response) => {
        if(response){
          this.setLanguage(response)
        }
      })
    }
    else{
      this.setLanguage(this.avaliableLang[0])
    }
  }

  getLanguage(): Observable<string>{
    return this.appStorage.get('ln', StorageProxy.STORES.LOCAL);
  }

  setLanguage(ln: string):void{
    this.translateService.setDefaultLang(ln);
    this.translateService.use(ln);
    this.appStorage.set('ln', ln);
    this.lang.next(ln);
  }
}
