export interface User {
  id: number,
  name: string,
  email: string,
  username: string,
  password: string,
  apartment: number,
  image?: string,
  isAdmin?: boolean,
};

export interface Post {
  id: number,
  user_id: number,
  content: string,
};