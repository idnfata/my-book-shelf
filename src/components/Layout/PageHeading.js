import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import styled from "styled-components";


const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: "24px",
    alignItems: 'center',
    justifyContent: 'space-between',
    left: {
      display: 'flex',
      flexDirection: 'column',
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "400px",
      lineHeight: "24px",
      margin: 0,
    },
    "& h3": {
      margin: 0,
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
});


const Wrapper = styled(Grid)`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    // margin-top: 75px;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
  }
`;


export default function PageHeading({title, endElement}) {
  const classes = useStyles();
  const [date, setDate] = useState("" || new Date());
  const monthList = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 60000);
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        <Box className={classes.left}>
        <p className={classes.time}>
          {date.getDate()} {monthList[date.getMonth()]} {date.getFullYear()},
          {" " + date.getHours()}:
          {date.getMinutes().length < 1
            ? "0" + date.getMinutes()
            : date.getMinutes()}
        </p>
        <h3>{title}</h3>
        </Box>
        <Box className={classes.right}>
          {endElement && endElement}
        </Box>
      </Wrapper>
    </React.Fragment>
  );
}
