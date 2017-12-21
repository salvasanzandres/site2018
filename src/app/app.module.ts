import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {ParcoursComponent} from "./pages/parcours/parcours.component";
import {NotFoundComponent} from "./pages/notFound/notFound.component";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {ROUTES} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StorageProxy} from "./core/infrastructure/proxies/storage.proxy";
import {StorageService} from "./core/domain/services/storage.service";
import {ConfigurationService} from "./core/domain/services/configuration.service";
import {TranslateService, TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ParcoursDetailComponent} from "./pages/parcours/detail/parcours-detail.component";
import {ChartModule} from "primeng/components/chart/chart";
import {LightboxModule} from "primeng/components/lightbox/lightbox";



@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, ParcoursComponent, NotFoundComponent, ProjectsComponent, ParcoursDetailComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserModule,   RouterModule.forRoot(ROUTES, {
      enableTracing: false ,
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),BrowserAnimationsModule, ChartModule, LightboxModule],
  providers: [{provide: ConfigurationService, useClass: ConfigurationService},
              {provide: StorageProxy, useClass: StorageProxy},
              {provide: 'StorageService', useClass: StorageService},
              TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
