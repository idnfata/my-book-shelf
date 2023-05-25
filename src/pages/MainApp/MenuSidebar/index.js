import { IconDown, IconUp, Logo } from "@assets";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FooterImage,
  Navbar,
  NavBrand,
  NavBrandLogo,
  NavBrandName,
  NavFooter,
  NavFooterContent,
  NavFooterDesc,
  NavFooterLink,
  NavFooterTitle,
  NavIcon,
  NavItem,
  NavLinks,
  NavList,
  SidebarDropdownIcon,
  SidebarItemDropdownIcon,
  SidebarLabel,
  DropdownLink,
  ContainerDropdown,
} from "./menu-sidebar.elements";
import { navAdmin, navAgent } from "./setting";

const MenuSidebar = ({
  user,
  showNavBrandName,
  showNavFooter,
  hideBrandLogo,
}) => {
  const [menu, setMenu] = useState([]);
  const [open, setOpen] = useState(true);
  const [subnav, setSubnav] = useState(false);
  const [subnavActive, setSubnavActive] = useState("");
  const showSubnav = (navTitle) => {
    if (subnavActive === navTitle) {
      setSubnavActive("");
      setSubnav(false);
    } else {
      if (!subnav) {
        setSubnav(true);
      }
      setSubnavActive(navTitle);
    }
  };

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    //jika ada role lain, atur di setting.js menunya, cek dulu
    switch (user?.role_id) {
      case "0":
        setMenu(navAdmin);
        break;

      case "7":
        setMenu(navAgent);
        break;

      default:
        break;
    }
    // setMenu(navAdmin);
  }, [user]);

  return (
    <Navbar>
      <div>
      <NavBrand to="/">
        {!hideBrandLogo && (
          <NavBrandLogo src={Logo} alt="Logo" width={"95px"} height={"70px"} />
        )}
        {showNavBrandName && (
          <NavBrandName>{user?.company?.short_name ?? "PT. PBKM"}</NavBrandName>
        )}
      </NavBrand>

      <NavList>
        {menu.map((nav, i) => (
          <React.Fragment key={i}>
            <NavItem
              onClick={() => {
                if (nav.subMenu) {
                  showSubnav(nav.title);
                }
              }}
            >
              <NavLinks
                to={nav.path}
                className={`${
                  location.pathname.split("/")[1] == nav.path.split("/")[1]
                    ? "active"
                    : ""
                }`}
                onClick={(e) => {
                  if (nav.subMenu) {
                    e.preventDefault();
                    // setSubnavActive(nav.title);
                  }
                }}
              >
                <NavIcon
                  icon={nav.icon}
                  className={`${
                    location.pathname.split("/")[1] == nav.path.split("/")[1]
                      ? "active"
                      : ""
                  }`}
                />
                <span>{nav.title}</span>
                {/* show icon dropdown */}
                {nav?.subMenu && nav.title === subnavActive && subnav ? (
                  <SidebarDropdownIcon
                    icon={IconUp}
                    expandedIcon={IconUp}
                    width={8}
                    height={8}
                    className={`${
                      location.pathname.split("/")[1] == nav.path.split("/")[1]
                        ? "active"
                        : ""
                    }`}
                  />
                ) : nav?.subMenu ? (
                  <SidebarDropdownIcon
                    icon={IconDown}
                    width={8}
                    height={8}
                    className={`${
                      location.pathname.split("/")[1] == nav.path.split("/")[1]
                        ? "active"
                        : ""
                    }`}
                  />
                ) : null}
              </NavLinks>
              {subnav ? (
                <ContainerDropdown>
                  {nav?.subMenu?.map((item, index) => {
                    if (nav.title === subnavActive)
                      return (
                        <DropdownLink
                          to={item.path}
                          key={index}
                          className={`${
                            location.pathname.split("/")[2] ==
                            item.path.split("/")[2]
                              ? "active"
                              : ""
                          }`}
                        >
                          <SidebarItemDropdownIcon
                            icon={item.icon}
                            width={8}
                            height={8}
                            className={`${
                              location.pathname.split("/")[2] ==
                              item.path.split("/")[2]
                                ? "active"
                                : ""
                            }`}
                          />
                          <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                      );
                  })}
                </ContainerDropdown>
              ) : (
                ""
              )}
            </NavItem>
            {/* loop sub Menu */}
            {/* <ContainerDropdown> */}

            {/* </ContainerDropdown> */}
          </React.Fragment>
        ))}
      </NavList>
      </div>
      {/* 
      {showNavFooter && (
        <NavFooter>
          <FooterImage src={DocumentsImg} alt="documents" />
          <NavFooterContent>
            <NavFooterTitle>PDF Report</NavFooterTitle>
            <NavFooterDesc>Annual detailed report</NavFooterDesc>
            <NavFooterLink path="#">Download</NavFooterLink>
          </NavFooterContent>
        </NavFooter>
      )} */}

      {showNavFooter && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '30px',
          marginBottom: '20px'
        }}>
          <Link to="/" className="footer-menu">About</Link>
          <Link to="/" className="footer-menu">Support</Link>
          <Link to="/" className="footer-menu">Terms & Condition</Link>
        </div>
      )}
    </Navbar>
  );
};

export default MenuSidebar;
