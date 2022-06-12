import { useState } from 'react';
import logo from '../../assets/logo-login.png'
import * as Styled from './styled';
import { Form, ButtonGroup, ToggleButton } from 'react-bootstrap';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createUser } from '../../services/MainAPI/users';

const validationSchema = Yup.object({
  name: Yup.string().required('This is required*'),
  email: Yup.string().email('Invalid email').required('This is required*'),
  username: Yup.string().min(10, 'Minimum 10 characters').required('This is required*'),
  password: Yup.string().min(10, 'Minimum 10 characters').required('This is required*'),
  apartment: Yup.number().min(10, 'Minimum 10 characters').required('This is required*'),
});

const RegistrationForm: React.FC = () => {
  const [radioValue, setRadioValue] = useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      apartment: 0,
    },

    validationSchema,

    onSubmit: async values => {
      await createUser({
        name: values.name,
        email: values.email,
        username: values.username,
        password: values.password,
        apartment: values.apartment
      });

      values.name = '';
      values.email = '';
      values.username = '';
      values.password = '';
      values.apartment = 0;
    }
  });

  return (
    <>
      <Styled.Logo src={logo} alt="Parrot logo" />
      <h2>CADASTRO</h2>
      <Styled.SForm>
        <Form.Group controlId="formBasicName">
          <Styled.SInput type="text" placeholder='Nome e Sobrenome' />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Styled.SInput type="email" placeholder='Email' />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Styled.SInput type="text" placeholder='Usuário' />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Styled.SInput type="password" placeholder='Senha' />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Styled.SInput type="password" placeholder='Confirmar Senha' />
        </Form.Group>

        <Form.Group controlId="formBasicApartment">
          <Styled.SInput type="number" placeholder='Apartamento Nº' />
        </Form.Group>

        <ButtonGroup>
          <ToggleButton
            key='1'
            id='1'
            type="radio"
            name="1"
            value="1"
            checked={radioValue === '1'}
            onChange={handleChange}
          >
            <img src={user1} alt="User 1" />
          </ToggleButton>

          <ToggleButton
            key='2'
            id='2'
            type="radio"
            name="2"
            value="2"
            checked={radioValue === '2'}
            onChange={handleChange}
          >
            <img src={user2} alt="User 2" />
          </ToggleButton>

          <ToggleButton
            key='3'
            id='3'
            type="radio"
            name="3"
            value="3"
            checked={radioValue === '3'}
            onChange={handleChange}
          >
            <img src={user3} alt="User 3" />
          </ToggleButton>

          <ToggleButton
            key='4'
            id='4'
            type="radio"
            name="4"
            value="4"
            checked={radioValue === '4'}
            onChange={handleChange}
          >
            <img src={user4} alt="User 4" />
          </ToggleButton>
        </ButtonGroup>

        <Styled.SButton type="submit">Cadastrar</Styled.SButton>
      </Styled.SForm>
    </>
  );
};

export default RegistrationForm;