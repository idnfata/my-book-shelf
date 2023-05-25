import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {
  getUserInfo,
  getUserToken,
  logoutUser,
  setMessage,
  setMessageType,
  setUser,
} from "@services/redux/action";
import {
  ContentWrapper,
  MenuWrapper,
  Wrapper,
} from "@components/Layout/Wrapper";
import MenuSidebar from "./MenuSidebar";
import Error404 from "@pages/404/Error404";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import {

  Box,
  Typography,
} from "@mui/material";
import {
  FieldInputOutline,
  Label,
  ContentLoading,
  ModalDialog,
  PageLoading,
} from "@components";

import BGAuthSolid from "@assets/img/bg-auth-solid.png";
import BGAuthTransparent from "@assets/img/bg-auth-transparent.png";

import Header from "./Header";
import ChangePassword from "./ChangePassword";

import Withdraw from "./Withdraw";
import Deposit from "./Deposit";

import { BookDetail, MyShelf, UserDashboard } from "pages/User";

const MainApp = (props) => {
  const token = getUserToken();
  const user = getUserInfo();
  const [modalState, setModalState] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, showFooter, loading } = useSelector(
    (reducer) => reducer.global
  );
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    //check apakah ada token yang tersimpan di localstorage, jika tidak ada return to login page
    if (!token) {
      navigate("/login");
    }
  }, [isLogin, token]);

  const openModalDeposit = () => {
    setModalState((prevState) => ({
      ...prevState,
      openModal: true,
      modalTitle: "Deposit",
      modalContent: (
        <Deposit
          onClose={() => {
            setModalState(null);
          }}
          dispatch={dispatch}
          getAgentByEmail={getAgentByEmail}
          setUser={setUser}
        />
      ),
    }));
  };
  const openModalWithdraw = () => {
    setModalState((prevState) => ({
      ...prevState,
      openModal: true,
      modalTitle: "Withdraw",
      modalContent: (
        <Withdraw
          onClose={() => {
            setModalState(null);
          }}
        />
      ),
    }));
  };
  const goToHistoryTransaction = () => {
    navigate("/history-transaction");
  };
  const openModalChangePassword = () => {
    setModalState((prevState) => ({
      ...prevState,
      openModal: true,
      modalType: "add",
      modalTitle: "Change Password",
      modalContent: (
        <ChangePassword
          onClose={() => {
            setModalState(null);
          }}
          email={user?.email}
          token={token}
        />
      ),
    }));
  };

  const handleLogout = async () => {
    const res = await dispatch(logoutUser(token)).catch((err) => err);
    // console.log("res", res);
    if (res) {
      navigate("/login");
    }
  };

  return pageLoading ? (
    <PageLoading />
  ) : (
    <React.Fragment>
      <div style={styles.dashboardWrapper}>
        <Box style={styles.dashboardBackground}>
          <Box style={styles.dashboardBackgroundTransparent}>
            <motion.div
              initial={{ opacity: 0.9, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div style={styles.dashboardContentWrapper}>
                {/* left */}

                <MenuWrapper>
                  <MenuSidebar user={user} showNavFooter={true} />
                </MenuWrapper>

                {/* right */}

                <Header
                  openModalChangePassword={openModalChangePassword}
                  openModalDeposit={openModalDeposit}
                  openModalWithdraw={openModalWithdraw}
                  handleLogout={handleLogout}
                  user={user}
                  goToHistoryTransaction={goToHistoryTransaction}
                />

                <ContentWrapper>
                  {loading ? (
                    <ContentLoading />
                  ) : (
                    <Routes>
                      {
                        // definisikan route tiap role
                        (() => {
                          switch (user?.role_id) {
                            case "0": //super admin
                              return (
                                <>
                                  <Route path="*" element={<Error404 />} />
                                  <Route path="/" element={<Error404 />} />
                                  <Route path="/about" element={<About />} />
                                </>
                              );
                              break;
                            case "7": //user
                              return (
                                <>
                                  <Route path="/" element={<UserDashboard />} />
                                  <Route
                                    path="/my-shelf"
                                    element={<MyShelf />}
                                  />
                                  <Route
                                    path="/books/detail"
                                    element={<BookDetail />}
                                  />
                                </>
                              );
                              break;
                            default:
                              return null;
                              break;
                          }
                        })()
                      }
                    </Routes>
                  )}
                </ContentWrapper>

                {showFooter && <Footer />}
                <ModalDialog
                  open={modalState?.openModal ?? false}
                  type={modalState?.modalType ?? ""}
                  footer={false}
                  title={modalState?.modalTitle ?? ""}
                  titleFontSize={24}
                  backdropClose={true}
                  onClose={() => {
                    setModalState(null);
                  }}
                  maxWidth={384}
                >
                  {/* <UpdateTagComponent saveData={saveData} loadingUpdate={loadingUpdate} modalState={modalState} /> */}
                  {modalState?.modalContent}
                </ModalDialog>
              </div>
            </motion.div>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
};
export default MainApp;

const styles = {
  dashboardWrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fff",
    position: "relative",
  },

  dashboardBackground: {
    backgroundImage: `url(${BGAuthSolid})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  dashboardBackgroundTransparent: {
    backgroundImage: `url(${BGAuthTransparent})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  dashboardContentWrapper: {
    backgroundColor: "#F3F3F7",
    width: "96vw",
    height: "93vh",
    display: "flex",
    flex: 1,
    borderRadius: "10px",
  },
};
