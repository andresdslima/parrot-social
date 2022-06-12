import { api } from './config';
import { Post } from '../../components/types';

export const createPost = async (post: Omit<Post, "id">) => {
  try {
    const response = await api.post<Post>('/posts', post);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};