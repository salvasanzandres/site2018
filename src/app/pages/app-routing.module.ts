import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ParcoursComponent} from "./parcours/parcours.component";
import {NotFoundComponent} from "./notFound/notFound.component";


export const ROUTES = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'parcours', component: ParcoursComponent},
  {path: '**', component: NotFoundComponent}
]
