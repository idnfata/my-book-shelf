import React, { useEffect, useState } from "react";
import {
  ButtonFilled,
  DatePickers,
  ButtonLoading,
  PostLoading,
} from "@components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import MyShelfComponent from "./components/MyShelfComponent";
import { Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { tahun_bulan_tanggal } from "@helpers/date";
import API from "@services/api/ApiProvider";

const Title = styled(Typography)`
  font-size: 24px !important;
  font-weight: 600 !important;
  color: #363e52 !important;
  text-transform: capitalize !important;
  span {
    color: #ef8361;
  }
`;

const categories = [
  { id: 1, name: "All Books" },
  { id: 2, name: "Favourite" },
  { id: 3, name: "Borrowed Books" },
  { id: 4, name: "E-Books" },
  { id: 5, name: "Audio Books" },
  { id: 6, name: "Article & Journals" },
];
const MyShelf = (props) => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const { search } = useLocation();
  let currLoc = search?.split("&")[6];
  currLoc = currLoc?.split("=")[1];
  currLoc = currLoc?.replace("+", "-");

  const getBooks = async () => {
    setLoading(true);
    const res = await API.get("books");
    if (res?.status === 200) {
      const data = await res?.data;
      // console.log('res', res);
      setBooks(data);
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
    getBooks();
  }, []);
  return (
    <React.Fragment>
      <Title>
        Your <span>Shelf</span>
      </Title>
      <MyShelfComponent categories={categories} books={books} />
      {loading && <PostLoading />}
    </React.Fragment>
  );
};

export default MyShelf;
