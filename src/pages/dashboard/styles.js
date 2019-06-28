import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 15px;
  background-color: #f6f6f6;
`;

export const Order = styled.div`
  max-width: 920px;
  margin: 0 auto;

  h1 {
    font-size: 18px;
    font-weight: bold;
    color: #333333;
  }
`;

export const OrderItem = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  h2 {
    font-size: 18px;
    font-weight: normal;
    color: #0b2031;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    color: #706e7b;
  }

  span {
    display: inline-block;
    padding: 10px;
    background-color: #E81237;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 15px;
  margin-bottom: 15px;
  border-top: 1px solid #EEEDED;
  border-bottom: 1px solid #EEEDED;
  padding: 10px 0;
`;

export const ProductItem = styled.div`
  display: flex;
  width: calc((100% - 20px) / 2);
  border-radius: 10px;
  padding: 15px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #EEEDED;

  &:nth-child(2n + 2) {
    margin-right: 0;
  }

  @media (max-width: 800px) {
    & {
      width: 100%;
      margin-right: 0;
    }
  }

  img {
    width: 120px;
    height: auto;
    background-color: #EEEDED;
    margin-right: 15px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #0b2031;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: #0b2031;
  }

  span {
    font-size: 12px;
    color: #706e7b;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  color: #706e7b;
`;
