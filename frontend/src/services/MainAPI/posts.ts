import { api } from './config';
import { Post } from '../../components/types';

api.defaults.headers.common['Content-Type'] = 'application/json';

export const getPosts = async () => {
  try {
    const response = await api.get<Post[]>("/post")
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};

export const createPost = async (post: Omit<Post, "post_id">) => {
  try {
    const response = await api.post<Post>('/post', post);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};