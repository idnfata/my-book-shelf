import React from "react";
import { Grid, IconButton } from "@mui/material";
import IconArrowBack from "../../assets/icons/bx-arrow-left.svg";
import { useNavigate } from "react-router-dom";

export default function TitleWithBackPage({
  title,
  EndElement,
  hiddenBackButton,
}) {
  const navigate = useNavigate();
  return (
    <Grid justifyContent="space-between" display="flex">
      <Grid
        sx={{
          "& h1": {
            margin: 0,
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "32px",
          },
          display: "flex",
          alignItems: "center",
          "& .divider": {
            borderRight: "1px solid #E4E7EB",
            marginLeft: "16px",
            marginRight: "16px",
            height: "100%",
          },
        }}
      >
        {!hiddenBackButton && (
          <>
            <IconButton onClick={() => navigate(-1)}>
              <img src={IconArrowBack} alt="" />
            </IconButton>
            <span className="divider" />
          </>
        )}
        <h1>{title || "No Data"}</h1>
      </Grid>
      {EndElement}
    </Grid>
  );
}
