import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./post/post.component";
import {SocialNetworkComponent} from "./social-network.component";

const routes: Routes = [
  {
    path: '', component: SocialNetworkComponent
  },
  {
    path: 'post', component: PostComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialNetworkRoutingModule {
}
