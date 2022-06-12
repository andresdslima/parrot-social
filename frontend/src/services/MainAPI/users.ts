import { api } from './config';
import { User } from '../../components/types';

export const createUser = async (user: Omit<User, "id">) => {
  try {
    const response = await api.post<User>('/users', user);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};