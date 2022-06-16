import { api } from './config';
import { Post } from '../../components/types';

export const renderPosts = (): Promise<Post[]> => {
  return api.get<Post[]>("/posts").then(response => response.data);
 }
 
 export const renderPostsById = (id:number):  Promise<Post[]> => {
     return api.get<Post[]>(`/posts/${id}`).then(response => response.data)
 }
 
 export const createPost = async (post: Omit<Post, "id">) => {
     try{
         const response = await api.post("/posts", post)
         return response.data;
     } catch(error: any) {
         alert(`Error: ${error.response.data}`)
     }
 }
 