import React, { useEffect, useState } from "react";
import {
  ButtonFilled,
  DatePickers,
  ButtonLoading,
  PostLoading,
} from "@components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookDetailComponent from "./components/BookDetailComponent";
import { Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { tahun_bulan_tanggal } from "@helpers/date";
import API from "@services/api/ApiProvider";
import { IconBack, IconLeft } from "@assets";

const Title = styled(Link)`
  display: flex;
  flexdirection: row;
  align-items: center;
  font-size: 15px !important;
  font-weight: 400 !important;
  color: #4d4d4d !important;
  margin-bottom: 15px;
  img {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
`;

const BookDetail = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation();
  const state = location.state;
  const id = state?.id ?? 1;

  const getBookDetail = async () => {
    setLoading(true);
    const res = await API.get(`books/${id}`);
    if (res?.status === 200) {
      const data = await res?.data;
      //   console.log("res", res);
      setData(data);
      setLoading(false);
    } else {
      enqueueSnackbar(
        res?.data?.errors?.[0]?.message
          ? res?.data?.errors?.[0]?.message
          : res?.statusText ?? "Something went wrong!",
        {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          autoHideDuration: 2000,
        }
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, []);
  return (
    <React.Fragment>
      <Title to="/my-shelf">
        <img src={IconLeft} />
        Back to results
      </Title>
      <BookDetailComponent data={data} />
      {loading && <PostLoading />}
    </React.Fragment>
  );
};

export default BookDetail;
