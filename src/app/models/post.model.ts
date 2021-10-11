import {UserModel} from "./user.model";

export interface PostModel {
  id?: string;
  owner?: UserModel;
  text?: string;
  image?: string;
  likes?: string;
  tags?: string[];
  publishDate?: string;
}
