import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layout";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'social-network',
        loadChildren: () => import('./pages/social-network/social-network.module').then(m => m.SocialNetworkModule),
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
