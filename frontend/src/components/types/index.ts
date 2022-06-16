export interface User {
  user_id: number,
  name: string,
  email: string,
  username: string,
  password: string,
  apartment: number | undefined,
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
  created_at?: string,
  updated_at?: string,
};

export interface Login {
  email: string;
  password: string;
};