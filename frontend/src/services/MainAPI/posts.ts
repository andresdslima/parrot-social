import { api } from './config';
import { Post } from '../../components/types';

export const createPost = async (post: Omit<Post, "post_id">) => {
  try {
    const response = await api.post<Post>('/post', post);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};