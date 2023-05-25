import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { ButtonFilled, ButtonOutline, Label } from "@components";


const ModalDelete = ({ onClose, onSubmit }) => {
  return (
    <Box className="flex flex-col">
      <Label>You'll not be able to recover it</Label>

      <Box className="flex flex-start ml-auto mt-12">
        <ButtonOutline onClick={onClose} textButton="Cancel" />
        <ButtonFilled
          sx={{
            backgroundColor: "#244B99",
            textTransform: "none",
            boxShadow: "none",
            marginLeft: "16px",
          }}
          fontSx={{ fontWeight: 600 }}
          onClick={onSubmit}
          textButton="Delete"
          
        />
      </Box>
    </Box>
  );
};

export default ModalDelete;
