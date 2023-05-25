import React, { useState, useRef, useEffect } from "react";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Box,
} from "@mui/material";
import { Avatar } from "@mui/material";
import {
  HeaderWrapper,
  ProfileInfo,
  ProfileWrapper,
  SearchFilter,
  SearchIcon,
  SearchWrapper,
} from "./header-elements";
import {
  IconLock,
  IconLogout,
  IconDown,
  IconTopUp,
  IconWithdraw,
  IconTransactionHistory,
  DefaultProfile,
  IconDownTwo,
  IconSearch,
  IconSearchActive,
  IconBarcode,
} from "@assets";
import { NumberFormatter } from "@helpers/number";
import { NavIcon } from "../MenuSidebar/menu-sidebar.elements";

export default function Header({
  user,
  openModalChangePassword,
  handleLogout,
  openModalDeposit,
  openModalWithdraw,
  goToHistoryTransaction,
}) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const anchorRef = useRef();

  const navAdmin = [
    {
      title: "Ganti Password",
      path: "/change-password",
      icon: IconLock,
      onClick: openModalChangePassword,
    },
    {
      title: "Keluar",
      path: "/logout",
      icon: IconLogout,
      onClick: handleLogout,
    },
  ];

  const navOperational = [
    {
      title: "Ganti Password",
      path: "/change-password",
      icon: IconLock,
      onClick: openModalChangePassword,
    },
    {
      title: "Keluar",
      path: "/logout",
      icon: IconLogout,
      onClick: handleLogout,
    },
  ];

  const navFinance = [
    {
      title: "Ganti Password",
      path: "/change-password",
      icon: IconLock,
      onClick: openModalChangePassword,
    },
    {
      title: "Keluar",
      path: "/logout",
      icon: IconLogout,
      onClick: handleLogout,
    },
  ];

  const navAgent = [
    {
      title: "Deposit",
      path: "/deposit",
      icon: IconTopUp,
      onClick: openModalDeposit,
    },
    {
      title: "Withdraw",
      path: "/withdraw",
      icon: IconWithdraw,
      onClick: openModalWithdraw,
    },
    {
      title: "Riwayat Transaksi",
      path: "/history-transaction",
      icon: IconTransactionHistory,
      onClick: goToHistoryTransaction,
    },
    {
      title: "Ganti Password",
      path: "/change-password",
      icon: IconLock,
      onClick: openModalChangePassword,
    },
    {
      title: "Keluar",
      path: "/logout",
      icon: IconLogout,
      onClick: handleLogout,
    },
  ];

  const navKSOP = [
    {
      title: "Ganti Password",
      path: "/change-password",
      icon: IconLock,
      onClick: openModalChangePassword,
    },
    {
      title: "Keluar",
      path: "/logout",
      icon: IconLogout,
      onClick: handleLogout,
    },
  ];

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current.focus();
    prevOpen.current = open;
  }, [open]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) return;
    setOpen(false);
  };

  function handleListKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  let acronym =
    user?.name
      ?.split(/\s/)
      .reduce((response, word) => (response += word.slice(0, 1)), "") ?? "MR";

  useEffect(() => {
    //jika ada role lain, atur di setting.js menunya, cek dulu
    switch (user?.role_id) {
      case "0":
        setMenu(navAdmin);
        break;
      case "1":
        setMenu(navHR);
        break;
      case "2":
        setMenu(navAsset);
        break;
      case "3":
        setMenu(navEmployee);
        break;
      case "4":
        setMenu(navOperational);
        break;
      case "5":
        setMenu(navFinance);
        break;
      case "7":
        setMenu(navAgent);
        break;
      case "8":
        setMenu(navKSOP);
        break;
      default:
        break;
    }
  }, [user]);

  return (
    <React.Fragment>
      <HeaderWrapper>
        <SearchWrapper>
          <SearchFilter>
            <span>All</span>
            <img src={IconDownTwo} style={{ width: 15, height: 15 }} />
          </SearchFilter>
          <input type="text" className="search-book" placeholder="Search" />
          <SearchIcon>
            <img
              src={IconSearchActive}
              style={{ width: 15, height: 15 }}
              className="icon-search"
            />
            <div className="line" />
            <img
              src={IconBarcode}
              style={{ width: 15, height: 15 }}
              className="icon-barcode"
            />
          </SearchIcon>
        </SearchWrapper>
        <ProfileWrapper>
          <Box
            onClick={handleToggle}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: "33px",
            }}
          >
            {/* <Avatar sx={{ width: 45, height: 45 }}>{acronym}</Avatar> */}
            <img
              src={user?.image ?? DefaultProfile}
              style={{ width: 35, height: 35, borderRadius: 35 }}
            />
            <ProfileInfo>
              <h3>{user?.username ?? "Kenson"}</h3>
              <div className="role-wrapper">
                {/* <p>{user?.role_name === 'Agent' ? `Rp. ${NumberFormatter(user?.detail?.info?.balance)}` : user?.role_name  ?? "Admin"} </p> */}
                <img src={IconDownTwo} style={{ width: 15, height: 15 }} />
              </div>
            </ProfileInfo>
          </Box>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
                sx={{ marginTop: "12px", marginLeft: "10px", width: "100%" }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                      sx={{ padding: "5px" }}
                    >
                      {menu.map((nav, i) => (
                        <MenuItem
                          onClick={nav.onClick}
                          sx={{
                            fontSize: "12px",
                            borderRadius: "3px",
                            marginBottom: "5px",
                          }}
                          key={i}
                        >
                          <img
                            src={nav.icon}
                            alt={nav.title}
                            style={{
                              marginRight: "12px",
                              width: "22px",
                              height: "22px",
                            }}
                          />{" "}
                          {nav.title}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </ProfileWrapper>
      </HeaderWrapper>
    </React.Fragment>
  );
}
