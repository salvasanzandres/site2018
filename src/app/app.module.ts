import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {ParcoursComponent} from "./pages/parcours/parcours.component";
import {NotFoundComponent} from "./pages/notFound/notFound.component";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {MatGridListModule} from '@angular/material/grid-list';
import {ROUTES} from "./pages/app-routing.module";
import {MatSidenavModule, MatOptionModule, MatSelectModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, ParcoursComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,   RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }), MatGridListModule, MatSidenavModule, BrowserAnimationsModule, MatOptionModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
