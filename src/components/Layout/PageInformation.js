import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ButtonFilled, ButtonFilledSecondary } from "components/Button";
import { Content } from "components/Content";

const PageInformation = ({title, endTitleElements, content}) => {
  return (
    <Content className="pb-6 mb-12">
      <Box className="flex justify-between items-center px-12 py-6">
        <Typography sx={{fontWeight: 600, fontSize: '20px', color: '#363E52'}}>{title}</Typography>
        {endTitleElements && endTitleElements}
      </Box>
      <Divider />
      <Box className="px-12 py-6">{content}</Box>
    </Content>
  );
};

export default PageInformation;
