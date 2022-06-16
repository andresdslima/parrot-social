export interface User {
  id: number,
  name: string,
  email: string,
  username: string,
  password: string,
  apartment: number | undefined,
  avatar?: string,
  admin?: boolean,
  created_at?: string,
  updated_at?: string,
};

export interface Post {
  post_id: number,
  user_id: number,
  content: string,
  name: string,
  apartment: number,
  avatar: string,
  created_at?: string,
  updated_at?: string,
};

export enum Permission {
  "Nothing",
  "User",
  "Admin"
}

export interface UserState {
  isLogged: boolean,
  accessToken: string,
  permission: Permission,
  user_id?: number,
  name?: string,
  email?: string,
  apartment?: number
  avatar?: string
  created_at?: string,
}

export interface PostState {
  post: Post []
}