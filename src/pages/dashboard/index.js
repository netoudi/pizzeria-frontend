import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '../../store/ducks/order';

import { Container, Description, Header, Order, OrderItem, ProductItem, Products } from './styles';

moment.locale('pt-BR');

class Dashboard extends Component {
  static propTypes = {
    getOrderRequest: PropTypes.func.isRequired,
    order: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        value_total: PropTypes.number,
        description: PropTypes.string,
        created_at: PropTypes.string,
        user: PropTypes.shape({
          name: PropTypes.string,
        }),
        items: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          value_total: PropTypes.number,
          variant: PropTypes.shape({
            title: PropTypes.string,
            image_url: PropTypes.string,
            product: PropTypes.shape({
              title: PropTypes.string,
              image_url: PropTypes.string,
            }),
          }),
        })),
      })),
    }).isRequired,
  };

  componentDidMount() {
    const { getOrderRequest } = this.props;

    getOrderRequest();
  }

  timeAgo = datetime => moment(datetime, 'YYYY-MM-DD HH:mm:ss').fromNow();

  render() {
    const { order } = this.props;

    if (order.loading) {
      return (
        <Container>
          <Order>
            <h1>Carregando...</h1>
          </Order>
        </Container>
      );
    }

    return (
      <Container>
        <Order>
          <h1>Últimos pedidos</h1>

          {order.data.map(o => (
            <OrderItem key={o.id}>
              <Header>
                <h2>{`Pedido #${o.id} - ${o.user.name}`}</h2>
                <p>{this.timeAgo(o.created_at)}</p>
                <span>{`R$ ${o.value_total}`}</span>
              </Header>

              <Products>
                {o.items.map(p => (
                  <ProductItem key={p.id}>
                    <div>
                      <img src={p.variant.image_url || p.variant.product.image_url} alt="" />
                    </div>
                    <div>
                      <h3>{p.variant.product.title}</h3>
                      <p>{p.variant.title}</p>
                      <span>{`R$ ${p.value_total}`}</span>
                    </div>
                  </ProductItem>
                ))}
              </Products>

              <Description>
                <strong>Observações: </strong>
                {o.description}
              </Description>
            </OrderItem>
          ))}
        </Order>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
