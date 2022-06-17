import { api } from './config';
import { User, Login } from '../../components/types';

api.defaults.headers.common['Content-Type'] = 'application/json';

export const createUser = async (user: Omit<User, "user_id">) => {
  try {
    const response = await api.post('/user', user);
    return response;
  }
  catch (error) {
    console.error(error);
  };
};

export const updateUser = async (id: number, user: Omit<User, 'user_id'>) => {
  try {
    const response = await api.put(`/user/${id}`, user);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};

export const loginUser = async (user: Login) => {
  try {
    const response = await api.post('/login', user);
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};