import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuActions from '../../store/ducks/menu';

import { Container } from './styles';

const Overlay = ({ menu, mobile }) => <Container visible={menu.mobile} onClick={() => mobile()} />;

Overlay.propTypes = {
  menu: PropTypes.shape({
    mobile: PropTypes.bool,
  }).isRequired,
  mobile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  menu: state.menu,
});

const mapDispatchToProps = dispatch => bindActionCreators(MenuActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
