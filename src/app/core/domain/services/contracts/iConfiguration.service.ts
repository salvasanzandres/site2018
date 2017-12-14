import {Observable} from "rxjs";
import {Experience} from "../../models/experience.model";

export interface iConfigurationService{
  getLanguage(): Observable<string>;
  setLanguage(ln: string):void;
  getExperiences():Experience[];
}
