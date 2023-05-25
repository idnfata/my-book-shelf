import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #fff;
  display: flex;
  z-index: 9999999999;
  position: relative;
  flex-direction: column;
  width: 225px;
  box-sizing: border-box;
  /* box-shadow: 1px 0 5px -2px #aaa; */
  height: 100%;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media screen and (max-width: 768px) {
    bottom: 0;
    width: 100%;
    height: auto;
    padding: 0.1em;
    position: fixed;
    margin: 0;
    border-top: 1px solid var(--background-color);
  }
`;

export const NavBrand = styled.a`
  text-decoration: none;
  color: #242424;
  /* background-color: #fff; */
  font-family: "Francois One", sans-serif;
  letter-spacing: 1.2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid #e3e6ef; */
  padding: 28px, 16px, 28px, 16px;
  min-height: 80px;
  margin-top: 25px;
  margin-bottom: 25px;
   @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBrandLogo = styled.img`
  width: 85px;
  height: 60px;

`;

export const NavBrandName = styled.span`
  padding-top: 0.5em;
  font-size: 1.5em;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 1em;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-around;
  }

  @media screen and (max-width: 500px) {
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: space-around;
  }
`;

export const NavItem = styled.li`
  padding: 0;
  margin: 0;
  position: relative;
`;

export const NavLinks = styled(Link)`
  display: flex;
  color: #8A8A8A;
  padding: 1em;
  text-decoration: none;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  font-size: 1em;
  font-weight:400;
  
  span {
    width: 100%;
  }
  &.active {
    
    color: #FA7C54;
    /* color: var(--nav-active-text-color);
    background-color: var(--nav-active-background-color); */
  }
  &:hover {
    color: #FA7C54;

    /* background-color: var(--background-color-hover); */
  }
  
  @media screen and (max-width: 768px) {
    float: left;
    font-size: 0.8em;
    padding: 1em 0.5em;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    img {
      margin: 0;
    }
  }
`;


export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const ContainerDropdown = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    // top: 0;
    bottom: 40px;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 10px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid var(--background-color);
    // background-color: blue;
    // width: 100%

  }

  @media screen and (max-width: 500px) {
    bottom: 60px;
  }
`;

export const DropdownLink = styled(Link)`
  height: 30px;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--secondary-color);
  font-size: 0.92em;

  &:hover {
    cursor: pointer;
  }
  &.active {
    color: var(--primary-color);
  }
  img {
    &.active {
      background-color: var(--primary-color);
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 0;

    img {
      display: none;
    }
  }
`;

export const SidebarDropdownIcon = styled.img`
  -webkit-mask: url(${(icon) => icon}) no-repeat center;
  mask: url(${({ icon }) => icon}) no-repeat center;
  background-color: ${({ color }) =>
    color ? color : "var(--secondary-color)"};
    margin-left: auto;

  &.active {
    color: var(--primary-color);
    background-color: var(--primary-color);
    
  }
`;

export const SidebarItemDropdownIcon = styled.img`
  -webkit-mask: url(${(icon) => icon}) no-repeat center;
  mask: url(${({ icon }) => icon}) no-repeat center;
  background-color: ${({ color }) =>
    color ? color : "var(--secondary-color)"};
  &.active {
    color: var(--primary-color);
    background-color: var(--primary-color);
    
  }
`;

export const NavIcon = styled.img`
  width: 1.7em;
  height: 1.7em;
  margin-right: 0.5em;
  -webkit-mask: url(${(props) => props.icon}) no-repeat center;
  mask: url(${(props) => props.icon}) no-repeat center;
  background-color: ${(props) =>
    props.color ? props.color : "var(--secondary-color)"};

  &.active {
    color: #FA7C54;
    background-color: #FA7C54;
    /* color: var(--primary-color); */
    /* background-color: var(--primary-color); */
  }
`;

export const NavFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterImage = styled.img`
  width: 70%;
  position: relative;
  z-index: 1;
  top: -25px;
`;

export const NavFooterContent = styled.div`
  background-color: var(--background-color);
  margin: 0.5em;
  padding: 1.688em;
  padding-bottom: 20px;
  /* padding-top: 6em; */
  display: flex;
  flex-direction: column;
  font-weight: normal;
  border-radius: 1.3em;
  position: relative;
  bottom: 30%;
  box-sizing: border-box;
  width: 100%;
`;

export const NavFooterTitle = styled.h2`
  margin-top: 2em;
  color: var(--black);
  font-size: 1rem;
  text-align: center;
`;

export const NavFooterDesc = styled.span`
  color: var(--text);
  font-size: 0.8em;
`;

export const NavFooterLink = styled.a`
  color: var(--white);
  background-color: var(--primary-color);
  text-decoration: none;
  text-align: center;
  padding: 1em;
  border-radius: 1.3em;
  margin-top: 1em;
`;

export const SidebarSubMenu = styled.ul`
  z-index: 999;
  background-color: #aaa;
`;

export const SubMenuItem = styled.li`
  display: block;
  width: 150px;
  font-weight: normal;

  .sub-menu-link {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: var(--black);
    text-decoration: none;
    border-left: 1px solid var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
    font-size: 12px;
    /* background-color: var(--white); */
    /* z-index: 2; */
    &:hover {
      background-color: var(--primary-color);
      color: var(--white);
      font-weight: bold;
      cursor: pointer;
      /*  */
    }

    &.active {
      color: var(--white);
      border: none;
      font-weight: bold;
      background-color: var(--primary-color);
      border-bottom: 1px solid var(--secondary-color);
    }
  }
  &:last-child {
    border-right: 1px solid var(--secondary-color);
  }
`;
