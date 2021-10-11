import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialNetworkRoutingModule} from "./social-network-routing.module";
import { PostComponent } from './post/post.component';
import {SocialNetworkComponent} from "./social-network.component";
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SocialNetworkComponent,
    PostComponent,
    CommentsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SocialNetworkRoutingModule,
    ReactiveFormsModule
  ]
})
export class SocialNetworkModule { }
