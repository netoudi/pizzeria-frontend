import styled from 'styled-components';
import background from '../../assets/images/fundo.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .8), #000), url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 15px;
`;

export const Logo = styled.img`
  width: 72px;
  height: 72px;
  display: block;
  margin: 0 auto 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  
  & > input {
    height: 50px;
    line-height: 50px;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    color: #333;
    border: 0;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 0 15px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 10px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  background-color: #E81237;
`;
