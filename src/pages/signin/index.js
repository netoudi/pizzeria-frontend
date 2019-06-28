import React from 'react';

import { Button, Container, Form, Logo } from './styles';
import logo from '../../assets/images/logo.svg';

const SignIn = () => (
  <Container>
    <Form>
      <Logo src={logo} alt="" />

      <input type="text" id="email" name="email" placeholder="Seu e-mail" />

      <input type="password" id="password" name="password" placeholder="Senha secreta" />

      <Button type="submit">Entrar</Button>
    </Form>
  </Container>
);

export default SignIn;
