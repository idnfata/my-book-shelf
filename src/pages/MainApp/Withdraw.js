import React, { useEffect, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import {
  Stack,
} from "@mui/material";
import {
  ButtonFilled,
  ButtonOutline,
  FieldInputOutline,
  Label,
} from "@components";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { getUserInfo, getUserToken, setUser } from "@services/redux/action";
import { currencyInt, formatDecimal } from '@helpers/number';
import { useDispatch } from 'react-redux';

const defaultValues = {
  amount: "",
};

const schema = yup.object().shape({
  amount: yup.number().required("Amount is required"),
});

const Withdraw = ({ onClose }) => {
  const token = getUserToken();
  const user = getUserInfo();
  const agent_id = user?.detail?.info?.id;
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const { control, formState, handleSubmit, getValues, setValue } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmitWithdrawAgent = async (data) => {
    console.log("data amount", data);
    setLoading(true);
    const amount = currencyInt(getValues("amount")) || 0;
    data.amount = amount;
    setValue('amount', '');
    createAgentWithdraw(token, agent_id, data)
      .then((res) => {
        console.log("res create agent Withdraw", res);
        enqueueSnackbar(res.data.message, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          autoHideDuration: 1500,
        });
        getAgentByEmail(token)
          .then((res) => {
            console.log("res get detail agent di dashboard", res);
            const userInfo = {
              ...user,
              detail: res.data,
            };
            dispatch(setUser(userInfo));
          })
          .catch((err) => {
            console.log(err)
          });
        setLoading(false);
        onClose();
      })
      .catch((err) => {
        console.log("err create agent Withdraw", err);
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          autoHideDuration: 1500,
        });
        setLoading(false);
        onClose();
      });
  };

  if (loading) {
    return (
      <p>Loading</p>
    );
  }

  return (
    <form
      name="withdraw"
      noValidate
      className="flex flex-col justify-center w-full"
      onSubmit={handleSubmit(onSubmitWithdrawAgent)}
    >
      <Stack className="mt-4" direction="column" spacing={0.5} width="100%">
        <Label>Jumlah</Label>
        <Controller
          name="amount"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FieldInputOutline
              onChange={(e) => {
                setValue("amount", e.target.value);
              }}
              onBlur={onBlur}
              required
              value={value ? formatDecimal(value) : 0}
              error={!!errors.amount}
              helperText={errors?.amount?.message}
              fullWidth
              placeholder="Jumlah"
              sx={{ borderRadius: "8px" }}
            />
          )}
        />
      </Stack>
      <Box className="flex justify-end mt-12">
        <ButtonOutline onClick={onClose} textButton="Cancel" />
        <ButtonFilled
          sx={{
            backgroundColor: "#244B99",
            textTransform: "none",
            boxShadow: "none",
            paddingTop: 1,
            paddingBottom: 1,
            marginLeft: "16px",
          }}
          fontSx={{ fontWeight: 600 }}
          disabled={!!errors.amount}
          type="submit"
          textButton={
            "Submit"
          }
        />
      </Box>
    </form>
  )
}

export default Withdraw