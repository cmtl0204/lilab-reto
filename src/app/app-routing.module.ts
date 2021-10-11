import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layout";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AccessDeniedComponent} from "./pages/access-denied/access-denied.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'social-network',
        loadChildren: () => import('./pages/social-network/social-network.module').then(m => m.SocialNetworkModule),
      }
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
