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
// import { forgotPassword } from "@services/redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const schema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
});

const defaultValues = {
  email: "",
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

const ForgotPassword = () => {
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

  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    if (token) {
      console.log("token", token);
    }
  }, []);

  const onSubmit = async (data) => {
    console.log("data", data);
    // const res = await dispatch(forgotPassword(data)).catch((err) => err);

    // if (res) {
    // navigate(`/`);
    // }
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
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            backgroundImage: `url(${BGAuthTransparent})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100vw",
            height: "100vh",
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
                  <p style={styles.title}>Forgot Password?</p>
                  <p style={styles.subTitle}>
                    We’ll send you a reset instruction to your account email.
                  </p>
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
                      <Stack direction="column" spacing={0.5} width="100%">
                        <Label>Email</Label>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field: { onChange, onBlur } }) => (
                            <FieldInputOutline
                              onChange={onChange}
                              onBlur={onBlur}
                              required
                              value={getValues("email")}
                              error={!!errors.email}
                              sx={{ borderRadius: "8px" }}
                              helperText={errors?.email?.message}
                              fullWidth
                              placeholder="Input your account email address"
                            />
                          )}
                        />
                      </Stack>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{
                          backgroundColor: "#FA7C54",
                          textTransform: "none",
                          fontWeight: 600,
                          color: "#fff",
                          fontSize: "14px",
                          borderRadius: "8px",
                          pading: "16px",
                          marginTop: "12px",
                          // maxWidth: "88px",
                          boxShadow: "none",
                          '&:hover' : {
                            backgroundColor: '#EC2C5A'
                          }
                        }}
                      >
                        {loading ? (
                          <CircularProgress size={30} color="inherit" />
                        ) : (
                          "Reset Password"
                        )}
                      </Button>
                      <Box
                        mt="24px"
                        sx={{
                          display: "flex",
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "flex-start",
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
                          to="/login"
                        >
                          Back to Sign In
                        </Link>
                      </Box>
                    </form>
                  </Grid>
                </>
              ) : (
                <>
                  <p style={styles.title}>Forgot Password?</p>
                  <p style={styles.subTitle}>
                    We’ll send you a reset instruction to your account email.
                  </p>
                  <Box
                    mt="24px"
                    sx={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "flex-start",
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
                      to="/login"
                    >
                      Back to Sign In
                    </Link>
                  </Box>
                </>
              )}
            </Card>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
