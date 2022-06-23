import logo from '../../assets/logo-login.png'
import * as Styled from './styled';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { loginUser } from '../../services/MainAPI/users';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/MainAPI/config';
// import { useDispatch } from 'react-redux';
// import { signIn } from '../../store/users';

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('*'),
  password: Yup.string().min(6, 'Mínimo 6').required('*'),
});

const LoginForm: React.FC = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema,

    onSubmit: async values => {
      // await loginUser({
      //   email: values.email,
      //   password: values.password,
      // });
      console.log(values);
      const { token, user } = await loginUser(values);
      console.log(user);

      if (!user || user === undefined) {
        alert('Usuário ou senha inválidos!');
        return;
      };
      
        // dispatch(signIn({ token, permission: user.permission }));
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;        
        // alert(JSON.stringify({
        //   token, username: user.username
        // }, null, 2));
        console.log(values);
        alert('Usuário logado!');

        // formik.handleReset();
        navigate('/feed');
      }

      // if (response.status === 400 || 401 || 403 || 500) {
      //   return alert('Usuário ou senha inválidos!');
      // };
  });

  return (
    <Styled.CentralCard>
      <Styled.Logo src={logo} alt="Parrot logo" />
      <h2>LOGIN</h2>
      <Styled.SForm onSubmit={formik.handleSubmit}>
        {formik.errors.email && <small>{formik.errors.email}</small>}
        <Form.Group>
          <Styled.SInput
            type="email"
            name='email'
            id='email'
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Group>

        {formik.errors.password && <small>{formik.errors.password}</small>}
        <Form.Group>
          <Styled.SInput
            type="password"
            placeholder='Senha (mínimo 6)'
            name='password'
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Styled.SButton type="submit">Login</Styled.SButton>
      </Styled.SForm>

      <Styled.SLink to="/">Cadastrar-se</Styled.SLink>
    </Styled.CentralCard>
  );
};

export default LoginForm;