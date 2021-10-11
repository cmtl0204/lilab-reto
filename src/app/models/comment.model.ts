import {UserModel} from "./user.model";
import {PostModel} from "./post.model";

export interface CommentModel {
  id?: string;
  message?: string;
  publishDate?: string;
  post?: PostModel;
  owner?: UserModel;
}
