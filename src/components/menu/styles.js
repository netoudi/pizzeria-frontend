import styled from 'styled-components';
import { Link as Route } from 'react-router-dom';
import { MdExitToApp, MdHome, MdMenu, MdPersonOutline } from 'react-icons/md';

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: #0A1D2B;
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Logo = styled.img`
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Item = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Link = styled(Route)`
  display: block;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
`;

export const Profile = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > a {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }

  & > span {
    font-size: 16px;
    color: #ffffff;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const IconPerson = styled(MdPersonOutline)`
  font-size: 24px;
  color: #ffffff;
`;

export const IconLogout = styled(MdExitToApp)`
  font-size:24px;
  color: #ffffff;
`;

export const IconHome = styled(MdHome)`
  font-size: 24px;
  color: #ffffff;
`;

export const IconMenu = styled(MdMenu)`
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
`;

export const Mobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 800px) {
    display: none;
  }

  & ul {
    position: fixed;
    right: ${props => (props.visible ? '0' : '-250px')};
    top: 0;
    background-color: #0A1D2B;
    z-index: 9999;
    width: 250px;
    height: 100%;
    list-style: none;
    transition: all .2s ease-in-out;

    &::before {
      content: 'MENU';
      display: block;
      padding: 30px;
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      border-bottom: 1px solid #082b36;
    }

    & li {
      width: 100%;
      height: 50px;
      padding: 5px 20px;
      display: flex;
      border-bottom: 1px solid #082b36;

      & a {
        color: #ffffff;
        text-decoration: none;
        line-height: 50px;
        display: flex;
        align-items: center;
        flex: 1;

        & > span {
          margin-left: 5px;
        }
      }
    }
  }
`;
