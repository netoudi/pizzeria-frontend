import React from 'react';

import { Container, Description, Header, Order, OrderItem, ProductItem, Products } from './styles';
import image from '../../assets/images/fundo.jpg';

const Dashboard = () => (
  <Container>
    <Order>
      <h1>Últimos pedidos</h1>

      {[1, 2, 3].map(o => (
        <OrderItem key={o}>
          <Header>
            <h2>Pedido #3 - Fulano da Silva</h2>
            <p>há 2 segundos</p>
            <span>R$ 42,97</span>
          </Header>

          <Products>
            {[...Array(o * 3).keys()].map(p => (
              <ProductItem key={p}>
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <h3>Pizza Calabreza</h3>
                  <p>Grande</p>
                  <span>R$ 42,97</span>
                </div>
              </ProductItem>
            ))}
          </Products>

          <Description>
            <strong>Observações: </strong>
            Favor remover o tomate da pizza
          </Description>
        </OrderItem>
      ))}
    </Order>
  </Container>
);

export default Dashboard;
