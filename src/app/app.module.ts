import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MeComponent} from "./pages/me/me.component";
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
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {InViewportModule} from "ng-in-viewport";
import {CounterComponent} from "./pages/shared/counter/counter.component";
import {FooterComponent} from './pages/shared/footer/footer.component';
import {DefinitionComponent} from './pages/shared/definition/definition.component';
import {TasksComponent} from "./pages/shared/tasks/tasks.component";
import {NiceBoxComponent} from "./pages/shared/nice-box/nice-box.component";
import {MatIconModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, MeComponent, ParcoursComponent, NotFoundComponent, ProjectsComponent, ParcoursDetailComponent,
    CounterComponent, FooterComponent, DefinitionComponent, TasksComponent, NiceBoxComponent
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
    }), BrowserAnimationsModule,  InViewportModule.forRoot(), MatIconModule],
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
