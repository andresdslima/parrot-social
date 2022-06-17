export interface User {
  user_id: number,
  name: string,
  email: string,
  username: string,
  password: string,
  apartment?: number,
  avatar?: string,
  admin?: boolean,
};

export interface Post {
  post_id: number,
  user_id: number,
  content: string,
  name: string,
  apartment: number,
  avatar: string,
  created_at: string,
};

export interface Login {
  email: string,
  password: string,
};

export interface UserState {
  isLogged: boolean,
  accessToken: string,
  admin: boolean,
  user_id?: number,
  name?: string,
  email?: string,
  apartment?: number,
  avatar?: string,
  permission: Permission
};

export interface PostState {
  post: Post[],
};

export enum Permission {
  "Nothing",
  "User",
  "Admin"
}