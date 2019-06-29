import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';
import MenuActions from '../../store/ducks/menu';

import {
  Container,
  Header,
  IconHome,
  IconLogout,
  IconMenu,
  IconPerson,
  Item,
  Link,
  Logo,
  Mobile,
  NavBar,
  Profile,
} from './styles';
import logo from '../../assets/images/logo.svg';

const Menu = ({ menu, signedIn, signOut, username, mobile }) => {
  if (!menu.visible || !signedIn) return null;

  return (
    <Header>
      <Container>
        <Logo src={logo} />

        <NavBar>
          <Item>
            <Link to="/">Dashboard</Link>
          </Item>
        </NavBar>

        <Profile>
          <Link to="/profile">
            <IconPerson />
            <span>{username}</span>
          </Link>
          <Link
            to="/logout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <IconLogout />
            <span>Sair</span>
          </Link>
        </Profile>

        <Mobile visible={menu.mobile} onClick={() => mobile()}>
          <IconMenu />

          <ul>
            <li>
              <Link to="/">
                <IconHome />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <IconPerson />
                <span>{username}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <IconLogout />
                <span>Sair</span>
              </Link>
            </li>
          </ul>
        </Mobile>
      </Container>
    </Header>
  );
};

Menu.propTypes = {
  menu: PropTypes.shape({
    visible: PropTypes.bool,
    mobile: PropTypes.bool,
  }).isRequired,
  mobile: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  username: PropTypes.string,
};

Menu.defaultProps = {
  username: null,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  { ...AuthActions, ...MenuActions },
  dispatch,
);

const mapStateToProps = state => ({
  menu: state.menu,
  signedIn: state.auth.signedIn,
  username: state.auth.user.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
