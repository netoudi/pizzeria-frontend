import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import { Button, Container, Form, Logo } from './styles';
import logo from '../../assets/images/logo.svg';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Logo src={logo} alt="" />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={this.handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Senha secreta"
            value={password}
            onChange={this.handleInputChange}
          />

          <Button type="submit">Entrar</Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
