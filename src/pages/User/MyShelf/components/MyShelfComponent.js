import React from "react";
import {
  IconButton,
  Button,
  Skeleton,
  Grid,
  Paper,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { NumberFormatter } from "@helpers/number";
import { Link } from "react-router-dom";

const MyShelfComponent = ({ categories, books }) => {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        sx={{ marginTop: "5px", marginBottom: "10px" }}
      >
        {categories?.map((category, index) => (
          <Grid item md={1.8} xs={12} key={index}>
            <Typography sx={{ color: "#868686" }}>{category.name}</Typography>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        {books?.map((book, i) => (
          <Grid item md={3} xs={6} key={i}>
            <Link
              to="/books/detail"
              state={book}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "5px",
                backgroundColor: "#FFFFFF",
                boxSizing: "border-box",
                padding: "12px",
                marginRight: "3px",
                // minHeight: "260px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={book.image}
                  alt={book.Title}
                  style={{
                    width: "85px",
                    height: "120px",
                    marginBottom: "12px",
                  }}
                />
                <Typography
                  sx={{ color: "#4D4D4D", fontSize: "14px", fontWeight: "400" }}
                >
                  {book.Title}
                </Typography>
                <Typography
                  sx={{ color: "#4D4D4D", fontSize: "10px", fontWeight: "400" }}
                >
                  {book.author}
                </Typography>
                <Typography
                  sx={{ color: "#4D4D4D", fontSize: "10px", fontWeight: "400" }}
                >
                  {book.rating}/
                  <span
                    style={{
                      color: "#A7A7A7",
                      fontSize: "10px",
                      fontWeight: "400",
                    }}
                  >
                    100
                  </span>
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "#4D4D4D", fontSize: "12px", fontWeight: "400" }}
                >
                  Borrowed on
                </Typography>
                <Typography
                  sx={{ color: "#747373", fontSize: "10px", fontWeight: "400" }}
                >
                  11 Mar 2023 09:00 AM
                </Typography>
                <Typography
                  sx={{ color: "#4D4D4D", fontSize: "12px", fontWeight: "400" }}
                >
                  Submission Due
                </Typography>
                <Typography
                  sx={{ color: "#747373", fontSize: "10px", fontWeight: "400" }}
                >
                  14 Mar 2023
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: i === 1 ? "#42BB4E" : "#A0A0A0",
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14px",
                    borderRadius: "3px",
                    pading: "8px",
                    marginTop: "12px",
                    width: "100%",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#A0A0A0",
                    },
                  }}
                >
                  {i === 1 ? "E-BOOK" : "Borrowed"}
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#F76B56",
                    borderColor: "#F76B56",
                    fontSize: "14px",
                    borderRadius: "3px",
                    pading: "8px",
                    marginTop: "12px",
                    width: "100%",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#F76B56",
                      color: "white",
                    },
                  }}
                >
                  Return
                </Button>
              </div>
              {/* <Card variant="outlined" sx={{borderRadius: '5px', backgroundColor: '#FFFFFF', padding: 16,}}>
              <Typography sx={{ fontWeight: "bold", color: "#092540" }}>
              {book?.Title ?? "-"}
              </Typography>
              <Typography
                sx={{ fontWeight: "400", fontSize: "44px", color: "#244B99" }}
              >
                {book?.rating ?? "-"}
              </Typography>
            </Card> */}
            </Link>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default MyShelfComponent;
