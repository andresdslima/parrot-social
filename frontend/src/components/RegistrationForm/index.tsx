import logo from '../../assets/logo-login.png'
import * as Styled from './styled';
import { Form, ToggleButtonGroup, ButtonGroup, ToggleButton } from 'react-bootstrap';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createUser } from '../../services/MainAPI/users';

const validationSchema = Yup.object({
  name: Yup.string().required('*'),
  email: Yup.string().email('Email inválido').required('*'),
  username: Yup.string().required('*'),
  password: Yup.string().min(6, 'Mínimo 6').required('*'),
  apartment: Yup.number().required('*'),
  avatar: Yup.string().required(),
});

const RegistrationForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: '', // CONFIRMAR PASSWORD???
      apartment: undefined,
      avatar: '1',
    },

    validationSchema,

    onSubmit: async values => {
      await createUser({
        name: values.name,
        email: values.email,
        username: values.username,
        password: values.password,
        apartment: values.apartment,
        avatar: values.avatar,
        admin: false,
      });

      console.log(values);
      values.name = '';
      values.email = '';
      values.username = '';
      values.password = '';
      values.apartment = undefined;
      values.avatar = '1';
      alert('Usuário criado com sucesso!');
    }
  });

  return (
    <>
      <Styled.Logo src={logo} alt="Parrot logo" />
      <h2>CADASTRO</h2>
      <Styled.SForm onSubmit={formik.handleSubmit}>
        <Form.Group>
          {formik.errors.name && <small>{formik.errors.name}</small>}
          <Styled.SInput
            type="text"
            name='name'
            id='name'
            placeholder='Nome e Sobrenome'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Group>

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

        <Form.Group>
          {formik.errors.username && <small>{formik.errors.username}</small>}
          <Styled.SInput
            type="text"
            placeholder='Usuário'
            name='username'
            id='username'
            value={formik.values.username}
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

        {/* {formik.errors.password && <small>{formik.errors.password}</small>}
        <Form.Group>
          <Styled.SInput
            type="password"
            placeholder='Confirmar Senha'
            name='password'
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Form.Group> */}

        <Form.Group>
          <Styled.SInput
            type="number"
            placeholder='Apartamento Nº'
            name='apartment'
            id='apartment'
            value={formik.values.apartment}
            onChange={formik.handleChange}
          />
        </Form.Group>

        {/* ButtonGroup */}
        <ToggleButtonGroup type='radio' name='options' defaultValue='1'>
          <ToggleButton
            key='1'
            id='radio-1'
            name='radio'
            type="radio"
            value="1"
            checked={formik.values.avatar === '1'}
            onChange={formik.handleChange}
          >
            <img src={user1} alt="Man 1" />
          </ToggleButton>

          <ToggleButton
            key='2'
            id='radio-2'
            name='radio'
            type="radio"
            value="2"
            checked={formik.values.avatar === '2'}
            onChange={formik.handleChange}
          >
            <img src={user2} alt="Woman 1" />
          </ToggleButton>

          <ToggleButton
            key='3'
            id='radio-3'
            name='radio'
            type="radio"
            value="3"
            checked={formik.values.avatar === '3'}
            onChange={formik.handleChange}
          >
            <img src={user3} alt="Man 2" />
          </ToggleButton>

          <ToggleButton
            key='4'
            id='radio-4'
            name='radio'
            type="radio"
            value="4"
            checked={formik.values.avatar === '4'}
            onChange={formik.handleChange}
          >
            <img src={user4} alt="Woman 2" />
          </ToggleButton>
        </ToggleButtonGroup>

        <Styled.SButton type="submit">Cadastrar</Styled.SButton>
      </Styled.SForm>

      <Styled.SLink to="/login">Já possuo cadastro</Styled.SLink>
    </>
  );
};

export default RegistrationForm;