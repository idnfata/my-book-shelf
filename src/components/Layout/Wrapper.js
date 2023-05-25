import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 32px;
  width: 96vw;
  height: 93vh;
  border-radius: 10px;
  /* max-width: 100%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row; */
`;

export const MenuWrapper = styled.div`
  width: 225px;
  position: relative;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 0;
  }
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-bottom: 20px; */
  @media screen and (max-width: 500px) {
    background-color: var(--header-page);
    height: 60px;
  }
`;

export const WrapperTitleMobile = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    flex: 1;
    display: block;
    line-height: 60px;
    text-align: center;
    position: relative;
    left: 25%;
  }
`;

export const WrapperTitleDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: start;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 80px 0 0 0;
  background-color: transparent;
  padding: 0 32px 25px;
  border-bottom-right-radius: 10px;
  /* max-height: 98vh; */
  width: auto;
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    margin: 100px 20px;
    padding: 0;
    border-radius: 0;
    .page-request-agent {
      border-radius: 0px;
      margin-top: 0;
    }
    .content-page-request-agent {
      border: none;
    }
    .wrapper-menu-page-request-agent {
      justify-content: center;
      /* align-items: center; */
    }
  }
`;

export const PageContent = styled.div`
  display: grid;
  width: 95%;
  margin: 25px auto;
  padding-bottom: 50px;
  grid-template-areas:
    "row-1-col-1 row-1-col-2 row-1-col-3 row-1-col-4"
    "row-2-col-1 row-2-col-2 row-2-col-3 row-2-col-4"
    "row-3-col-1 row-3-col-2 row-3-col-3 row-3-col-4"
    "row-4-col-1 row-4-col-2 null null";
  grid-template-columns: repeat(4, 1fr);

  grid-auto-rows: 175px;
  gap: 20px;
  align-content: center;
  /* justify-items: center; */
  /* align-items: center; */
  /* margin-top: 15px; */

  .page-content-menu {
    background-color: white;
    display: flex;
    font-size: 13.5px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #222;
    border: 2px solid transparent;
    &:hover {
      background-color: transparent;
      font-weight: bold;
      border: 2px solid #222;
    }
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 500px) {
    grid-template-areas:
      "row-1-col-1 row-1-col-2 row-1-col-3"
      "row-2-col-1 row-2-col-2 row-2-col-3"
      "row-3-col-1 row-3-col-2 row-3-col-3"
      "row-4-col-1 row-4-col-2 row-4-col-3"
      "row-5-col-1 row-5-col-2 row-5-col-3";
    margin: 25px auto;
    gap: 15px;

    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 105px;
  }
`;

export const PageContentMenu = styled.div`
  width: 100%;
  min-height: 50px;
  box-shadow: 0 6px 15px -10px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "14px 22px")};
  /* display: grid;
  grid-template-columns: ${({ height }) =>
    height ? "repeat(4, 1fr)" : "repeat(auto-fit, minmax(75px, 1fr))"};
  margin: ${({ noGap }) => (noGap ? "0" : "25px auto 0px")};
  grid-auto-rows: ${({ height }) => (height ? height : "40px")}; */
  /* gap: ${({ gap }) => (gap ? gap : "0")}; */
  /* align-content: center; */

  /* position: relative; */
  #menu-pengaturan-perusahaan:focus ul {
    display: flex;
  }
  #menu-pengaturan-penggajian:focus ul {
    display: flex;
  }
  .menu-item-container {
    overflow: auto;
  }

  button {
    width: 210px;
  }

  @media screen and (max-width: 1230px) {
    button {
      width: 300px;
    }
  }

  .menu-item-wrapper {
    display: flex;
    width: 990px;
  }

  .menu-item {
    background-color: ${({ btnBGColor }) =>
      btnBGColor ? btnBGColor : "white"};
    color: ${({ btnColor }) => (btnColor ? btnColor : "var(--white)")};
    font-size: 13.5px;
    font-weight: ${({ weight }) => (weight ? weight : "normal")};
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 2px solid transparent;
    text-align: center;
    padding: 7px 20px;
    text-transform: capitalize;

    p {
      /* padding-top: 15px; */
    }
    &.active {
      background-color: ${({ activeBtnBGColor }) =>
        activeBtnBGColor ? activeBtnBGColor : "white"};
      color: ${({ activeBtnColor }) =>
        activeBtnColor ? activeBtnColor : "var(--white)"};
      font-weight: ${({ weight }) => (weight ? weight : "normal")};
    }

    &:hover {
      /* background-color: ${({ activeBtnBGColor }) =>
        activeBtnBGColor ? activeBtnBGColor : "white"}; */
      font-weight: ${({ weight }) => (weight ? weight : "normal")};
      color: ${({ activeBtnColor }) =>
        activeBtnColor ? activeBtnColor : "var(--white)"};
      cursor: pointer;
    }
    &:hover ul {
      display: flex;
    }

    /* &:first-child {
      border-top-left-radius: ${({ rightLeftBorder }) =>
      rightLeftBorder ? "10px" : "0"};
    }
    &:last-child {
      border-top-right-radius: ${({ rightLeftBorder }) =>
      rightLeftBorder ? "10px" : "0"};
    } */
  }
  .sub-menu {
    position: relative;
    top: 50px;
    display: flex;
    color: black;
    width: 100%;
  }
  @media screen and (max-width: 607px) {
    padding: 0;
    margin: 0;
    display: flex;
    overflow: scroll;
    // height: 35px;
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
    /* grid-auto-rows: 35px; */

    .menu-item-container {
      height: 160px;
      width: 100%;
    }

    .menu-item-wrapper {
      flex-direction: column;
      width: 100%;
      margin-bottom: 14px;
    }

    button {
      width: 100%;
    }

    .menu-item {
      flex: 1;

      &:first-child {
        border-top-left-radius: ${({ rightLeftBorder }) =>
          rightLeftBorder ? "0px" : "0"};
      }
      &:last-child {
        border-top-right-radius: ${({ rightLeftBorder }) =>
          rightLeftBorder ? "0px" : "0"};
      }
    }
  }
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  /* width: 100%; */
  height: 30px;
  background-color: var(--white);
  left: 0;
  top: 35px;
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

export const Gap = ({ width, height }) => {
  return <div style={{ width, height }} />;
};

export const SettingWrapper = styled.div`
  display: grid;
  width: 95%;
  margin: 0 auto;
  /* min-height: 75vh;   */
  padding: 25px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: ${({ rightLeftBorder }) =>
    rightLeftBorder ? "10px" : "0"};
  border-bottom-right-radius: ${({ rightLeftBorder }) =>
    rightLeftBorder ? "10px" : "0"};
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 10px;
    min-height: 75vh;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const SettingContent = styled.div`
  padding: ${({ paddingDesktop }) => paddingDesktop ?? "0px"};

  @media screen and (max-width: 500px) {
    padding: ${({ paddingMobile }) => paddingMobile ?? "0px"};
    .edit-button-setting {
      position: absolute;
      bottom: 75px;
      right: 20px;
    }
  }
`;

export const ButtonBottomWrapper = styled.footer`
  background-color: #fff;
  display: flex;
  position: fixed;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  z-index: 99999999;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  align-items: center;
  box-shadow: 0 1px 8px -3px #aaa;
  padding-left: 258px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (max-width: 769px) {
    position: absolute;
    bottom: 30px;
    padding-left: 32px;
  }

  @media screen and (max-width: 500px) {
    bottom: 40px;
  }
`;

export const ButtonBottomWrapper2 = styled.footer`
  background-color: #fff;
  display: flex;
  position: fixed;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  z-index: 99999999;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  align-items: center;
  box-shadow: 0 1px 8px -3px #aaa;
  padding-left: 258px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (max-width: 769px) {
    position: absolute;
    bottom: 60px;
    padding-left: 32px;
  }

  @media screen and (max-width: 500px) {
    bottom: 80px;
  }
`;
