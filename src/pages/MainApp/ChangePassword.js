import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { IconButton, Stack } from "@mui/material";
import {
  ButtonLoading,
  ButtonOutline,
  FieldInputOutline,
  Label,
} from "@components";

import { Box } from "@mui/system";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "@services/api";
import { useSnackbar } from "notistack";

const schemaCurrentPassword = yup.object().shape({
  current_password: yup
    .string()
    .required("Current Password wajib diisi.")
    .min(6, "Current Password terlalu pendek - minimum 6 karakter."),
});

const schemaNewPassword = yup.object().shape({
  new_password: yup
    .string()
    .label("New Password")
    .required("New Password wajib diisi")
    .min(6, "New Password terlalu pendek - minimum 6 karakter."),
  confirm_password: yup
    .string()
    .label("Repeat New Password")
    .required("Repeat New Password wajib diisi")
    .oneOf([yup.ref("new_password"), null], "Password tidak sama"),
});

const defaultValuesCurrentPassword = {
  current_password: "",
};

const defaultValuesNewPassword = {
  new_password: "",
  confirm_password: "",
};

const ChangePassword = ({ email, onClose, token }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const defaultValues = currentPassword
    ? defaultValuesNewPassword
    : defaultValuesCurrentPassword;
  const schema = currentPassword ? schemaNewPassword : schemaCurrentPassword;

  const { control, formState, handleSubmit, getValues, setValue } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmitCurrentPassword = async (data) => {
    // console.log("data current password", data);
    setCurrentPassword(data.current_password);
    setValue("current_password", "");

  };
  const onSubmitNewPassword = async (data) => {
    data.email = email;
    data.old_password = currentPassword;
    setPostLoading(true);
    changePassword(token, data)
      .then((res) => {
        enqueueSnackbar(`Ganti Password Berhasil`, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          autoHideDuration: 1500,
        });
        setPostLoading(false);
        onClose();
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.message ?? "Something went wrong", {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
        setPostLoading(false);
      });
  };

  if (currentPassword !== "") {
    return (
      <form
        name="newPasswordForm"
        noValidate
        className="flex flex-col justify-center w-full"
        onSubmit={handleSubmit(onSubmitNewPassword)}
      >
        <Stack className="mt-4" direction="column" spacing={0.5} width="100%">
          <Label>New Password</Label>
          <Controller
            name="new_password"
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <FieldInputOutline
                onChange={onChange}
                onBlur={onBlur}
                required
                value={getValues("new_password")}
                error={!!errors.new_password}
                helperText={errors?.new_password?.message}
                fullWidth
                placeholder="Your New Password"
                sx={{ borderRadius: "8px" }}
                type={!showPassword ? "password" : "text"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              />
            )}
          />
        </Stack>
        <Stack className="mt-4" direction="column" spacing={0.5} width="100%">
          <Label>Repeat New Password</Label>
          <Controller
            name="confirm_password"
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <FieldInputOutline
                onChange={onChange}
                onBlur={onBlur}
                required
                value={getValues("confirm_password") || ""}
                error={!!errors.confirm_password}
                helperText={errors?.confirm_password?.message}
                fullWidth
                placeholder="Repeat Your New Password"
                sx={{ borderRadius: "8px" }}
                type={!showPassword ? "password" : "text"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              />
            )}
          />
        </Stack>

        <Box className="flex flex-start ml-auto mt-12">
          <ButtonOutline onClick={onClose} textButton="Cancel" />
          <ButtonLoading
            textButton="Save Changes"
            sx={{ ml: 1 }}
            loading={postLoading}
            disabled={!!errors.new_password || !!errors.confirm_password}
          />
        </Box>
      </form>
    );
  } else {
    return (
      <form
        name="currentPasswordForm"
        noValidate
        className="flex flex-col justify-center w-full"
        onSubmit={handleSubmit(onSubmitCurrentPassword)}
      >
        <Stack className="mt-4" direction="column" spacing={0.5} width="100%">
          <Label>Current Password</Label>
          <Controller
            name="current_password"
            control={control}
            render={({ field: { onChange, onBlur } }) => (
              <FieldInputOutline
                onChange={onChange}
                onBlur={onBlur}
                required
                value={getValues("current_password")}
                error={!!errors.current_password}
                helperText={errors?.current_password?.message}
                fullWidth
                //   placeholder="Your current_password"
                sx={{ borderRadius: "8px" }}
                type={!showPassword ? "password" : "text"}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon fontSize="small" />
                    ) : (
                      <VisibilityOffOutlinedIcon fontSize="small" />
                    )}
                  </IconButton>
                }
              />
            )}
          />
        </Stack>

        <Box
          mt="12px"
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link
            style={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "24px",
              color: "#244B99",
              cursor: "pointer",
              textDecoration: "none",
            }}
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </Box>
        <Box className="flex flex-start ml-auto mt-12">
          <ButtonOutline onClick={onClose} textButton="Cancel" />
          <ButtonLoading
            textButton="Next"
            sx={{ ml: 1 }}
            loading={postLoading}
            disabled={!!errors.current_password}
          />
        </Box>
      </form>
    );
  }
};

export default ChangePassword;
