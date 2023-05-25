import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Grid,
  Button,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
  Card,
  Stack,
} from "@mui/material";
import { FieldInputOutline, Label } from "@components";

import Logo from "@assets/img/logo.png";
import BGAuthSolid from "@assets/img/bg-auth-solid.png";
import BGAuthTransparent from "@assets/img/bg-auth-transparent.png";
import { Box } from "@mui/system";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password wajib diisi.")
    .min(6, "Password terlalu pendek - minimum 6 karakter."),
  re_type_password: yup
    .string()
    .required("Password wajib diisi.")
    .min(6, "Password terlalu pendek - minimum 6 karakter.")
    .oneOf([yup.ref("password"), null], "Password tidak sama"),
});

const defaultValues = {
  password: "",
  re_type_password: "",
};

const styles = {
  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "32px",

    color: "#363E52",
  },
  subTitle: {
    color: "#697186",
    fontWeight: 400,
    fontSize: "14px",
    marginTop: "16px",
  },
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, message, messageType, token, isLogin } = useSelector(
    (reducer) => reducer.global
  );

  const { control, formState, handleSubmit, getValues } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    if (token) {
      console.log("token", token);
    }
  }, []);

  const onSubmit = async (data) => {
    console.log("data", data);
    setResetSent(true);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#F8F9FC",
        display: "flex",
      }}
    >
      <Box
        style={{
          backgroundImage: `url(${BGAuthSolid})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0.9, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src={Logo}
            alt="logo"
            width="150px"
            height="150px"
            style={{ margin: "0 auto" }}
          />

          <Card
            sx={{
              marginTop: "20px",
              backgroundColor: "#fff",
              padding: "32px",
              width: "384px",
              borderRadius: "16px",
            }}
          >
            {!resetSent ? (
              <>
                {" "}
                <p style={styles.title}>Create New Password</p>
                <Grid
                  textAlign="left"
                  sx={{
                    mt: 3,
                    "& ul, li": {
                      margin: 0,
                      textAlign: "left",
                    },
                  }}
                >
                  {messageType === "error" && (
                    <Alert severity="error">{message}</Alert>
                  )}
                </Grid>
                <Grid mt="24px">
                  <form
                    name="forgotPasswordForm"
                    noValidate
                    className="flex flex-col justify-center w-full"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Stack
                      direction="column"
                      spacing={0.5}
                      width="100%"
                    >
                      <Label>New Password</Label>

                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, onBlur } }) => (
                          <FieldInputOutline
                            onChange={onChange}
                            onBlur={onBlur}
                            required
                            value={getValues("password")}
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                            fullWidth
                            placeholder="Input min. 6 characters"
                            sx={{ borderRadius: "8px" }}
                            type={!showPassword1 ? "password" : "text"}
                            endAdornment={
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword1(!showPassword1)}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword1 ? (
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
                    <Stack
                      className="mt-4"
                      direction="column"
                      spacing={0.5}
                      width="100%"
                    >
                      <Label>Re-type New Password</Label>

                      <Controller
                        name="re_type_password"
                        control={control}
                        render={({ field: { onChange, onBlur } }) => (
                          <FieldInputOutline
                            onChange={onChange}
                            onBlur={onBlur}
                            required
                            value={getValues("re_type_password")}
                            error={!!errors.re_type_password}
                            helperText={errors?.re_type_password?.message}
                            fullWidth
                            sx={{ borderRadius: "8px" }}
                            type={!showPassword2 ? "password" : "text"}
                            endAdornment={
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword2(!showPassword2)}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword2 ? (
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
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      sx={{
                        backgroundColor: "#244B99",
                        textTransform: "none",
                        fontWeight: 600,
                        color: "#fff",
                        fontSize: "14px",
                        borderRadius: "12px",
                        pading: "10px, 20px, 10px, 20px",
                        marginTop: "24px",
                        width: "100%",
                        boxShadow: "none",
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={30} color="inherit" />
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </form>
                </Grid>
              </>
            ) : (
              <>
                <p style={styles.title}>New Password Has Been Saved</p>
                <p style={styles.subTitle}>
                  Back to Sign In to continue with your new password.
                </p>

                <Link
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#244B99",
                    cursor: "pointer",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  to="/login"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      backgroundColor: "#244B99",
                      textTransform: "none",
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: "14px",
                      borderRadius: "12px",
                      pading: "10px, 20px, 10px, 20px",
                      marginTop: "24px",
                      width: "100%",
                      boxShadow: "none",
                    }}
                  >
                    Back to Sign In
                  </Button>
                </Link>
              </>
            )}
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ResetPassword;
