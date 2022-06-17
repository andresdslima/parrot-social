import { api } from './config';
import { User, Login } from '../../components/types';

export const createUser = async (user: Omit<User, "user_id">) => {
  try {
    const { data, status } = await api.post<User>('/user', user);
    return { data, status };
    // return { data, status } = response as Response;
  }
  catch (error: any) {
    console.error(error);
    return { data: null, status: error.response.status };
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
    console.log(response);    
    return response.data;
  }
  catch (error) {
    console.error(error);
  };
};