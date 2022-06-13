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
  id: number,
  user_id: number,
  content: string,
  created_at?: string,
  updated_at?: string,
};