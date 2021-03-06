import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`


