import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  /* background-color: #fff; */
  background-color: transparent,
  min-height: 80px;
  height: 80px;
  display: flex;
  position: fixed;
  top: 3.5vh;
  flex-direction: row;
  width: 96vw;
  box-sizing: border-box;
  z-index: 99999999;
  justify-content: space-between;
  align-items: center;
  padding-left: 250px;
  padding-right: 35px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 1px 8px -3px #aaa;
  border-radius: 40px;

  input {
    padding-left: 15px;
    height: 35px;
    width: 300px;
  }
`;

export const SearchFilter = styled.div`
  
  border-radius: 40px 0px 0px 40px;
  width: 65px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f7f7fa;
`;
export const SearchIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  background-color: #fff;
  border-radius: 0px 40px 40px 0px;
  .line {
    width: 1px;
    height: 20px;
    background-color: #DCDCDC;
    margin-right: 5px;
    /* border-right: 1px solid #DCDCDC; */
  }
  .icon-search {
    position: relative;
    right: 5px;
    
  }
  .icon-barcode {
    margin-right: 15px;
  }
`;
export const ProfileWrapper = styled.div`
  width: 150px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 15px;
  justify-content: space-between;
  margin-right: 15px;
  h3 {
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
  }
  .role-wrapper {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    p {
      font-weight-regular: 400;
      font-size: 12px;
      color: #687083;
    }
    img {
      margin-left: 3px;
    }
  }
`;
