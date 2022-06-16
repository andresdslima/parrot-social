import { api } from './config';
import { User, Login } from '../../components/types';

export const createUser = async (user: Omit<User, "user_id">) => {
  try {
    const response = await api.post<User>('/user', user);
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};

export const loginUser = async (user: Login) => {
  try {
    const response = await api.post('/login', user);
    console.log(response.data);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};