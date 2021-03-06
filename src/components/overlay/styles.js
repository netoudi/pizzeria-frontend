import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: all .2s linear;
`;
