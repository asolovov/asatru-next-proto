import styled from "styled-components";
import {FaBars} from "react-icons/fa";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  background: steelblue;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-basis: 100%;
  }
`;

export const NavLogoLink = styled.div`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 20px;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  font-size: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 30px;
  }
`;

export const CollapseNavBar = styled.div<{ $show?: boolean; }>`
  display: flex;
  align-items: center;
  flex-basis: auto;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    display: block;
    transition: all 0.5s;
    opacity: ${props => props.$show ? 1 : 0};
    max-height: ${props => props.$show ? 200 : 0};
    overflow: hidden;
    flex-basis: 100%;
    margin-left: 10px;
  }
`;

export const NavBarMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  display: list-item;
  color: white;
  padding-right: 1rem;
  font-size: 20px;

  &:hover {
    color: goldenrod;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const NavRight = styled.div`
  margin-left: auto;
  padding-right: 30px;
`

export const NavBtn = styled.button`
  border-radius: 4px;
  background: SteelBlue;
  padding: 10px 22px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: SteelBlue;
  }

  @media screen and (max-width: 768px) {
    background: none!important;
    border: none;
    padding: 10px;
    cursor: pointer;


    &:hover {
      color: goldenrod;
      transition: all 0s;
    }
  }
`