import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {ParcoursComponent} from "./pages/parcours/parcours.component";
import {NotFoundComponent} from "./pages/notFound/notFound.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ParcoursDetailComponent} from "./pages/parcours/detail/parcours-detail.component";


export const ROUTES = [
  {path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'parcours', component: ParcoursComponent},
  {path: 'parcours/:id', component: ParcoursDetailComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', component: NotFoundComponent}
]
