import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Grid,
  Button,
  IconButton,
  CircularProgress,
  Alert,
  Card,
  Stack,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { FieldInputOutline, Label } from "@components";
import Logo from "@assets/img/logo.png";
import BGAuthSolid from "@assets/img/bg-auth-solid.png";
import BGAuthTransparent from "@assets/img/bg-auth-transparent.png";
import { Box } from "@mui/system";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { getUserToken, setLoading } from "@services/redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import {
  SET_ISLOGIN,
  SET_MESSAGE,
  SET_MESSAGE_TYPE,
  SET_TOKEN,
  SET_USER,
} from "@services/redux/action/ListAction";

const schema = yup.object().shape({
  email: yup.string().required("Email / Username wajib diisi"),
  password: yup
    .string()
    .required("Password wajib diisi.")
    .min(6, "Password terlalu pendek - minimum 6 karakter."),
});

const defaultValues = {
  email: "",
  password: "",
};

const styles = {
  title: {
    fontWeight: "400",
    fontSize: "16px",
    color: "#4D4D4D",
    textAlign: "center",
    marginTop: "15px",
  },
  subtitle: {
    fontWeight: "400",
    fontSize: "12px",
    color: "#ABABAB",
    textAlign: "center",
  },
};

const Login = () => {
  const token = getUserToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { loading, message, messageType, isLogin } = useSelector(
    (reducer) => reducer.global
  );

  const { control, formState, handleSubmit, getValues } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [isLogin, token]);


  const onSubmit = async (data) => {
    // console.log('data', data)
    setLoading(true);
    // console.log("data", data);
    const res = await axios.post(`https://dummyjson.com/auth/login`, {
      username: data.email,
      password: data.password,
    }).catch(err => {
      // console.log('err login', err);

      enqueueSnackbar("Email atau password salah!", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 2000,
      });
      dispatch({ type: SET_ISLOGIN, value: false });
      setLoading(false);
    });
    // console.log('res login', res);
    if (res?.status === 200) {
      const user = await res?.data;
      
      const userInfo = {
        client_id: 1,
        name: user.firstName,
        image: user.image,
        user_id: user.id,
        username: user.username,
        email: user.email,
        role_id: "7",
        role_name: "User",
        detail: {},
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("token", user.token);
      dispatch({ type: SET_USER, value: userInfo });
      dispatch({ type: SET_TOKEN, value: user.token });
      dispatch({ type: SET_ISLOGIN, value: true });

      navigate("/");
      setLoading(false);

      // setData(data);
      // setLoading(false);
    } else {
      enqueueSnackbar("Email atau password salah!", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 2000,
      });
      dispatch({ type: SET_ISLOGIN, value: false });
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F3F3F7",
        position: "relative",
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
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: 'center'
              }}
            >
              <img
                src={Logo}
                alt="logo"
                width="105px"
                height="93px"
                style={{ margin: "10px auto" }}
              />
              <p style={styles.title}>Welcome Back !</p>
              <p style={styles.subtitle}>
                Sign in to continue to yourDigital Library
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
                  name="loginForm"
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
                          placeholder="Masukan email anda"
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
                    <Label>Password</Label>

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
                          placeholder="Masukan password anda"
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
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                      <Controller
                        name="remember"
                        control={control}
                        color="primary"
                        render={({ field }) => (
                          <FormControl>
                            <FormControlLabel
                              label={
                                <span
                                  style={{ fontSize: "14px", color: "#4D4D4D" }}
                                >
                                  Remember me
                                </span>
                              }
                              control={
                                <Checkbox
                                  checked={getValues("remember")}
                                  size="small"
                                  style={{
                                    width: "20px",
                                    // padding: 0,
                                    color: "#DF7D3A",
                                  }}
                                  iconStyle={{ fill: "#DF7D3A" }}
                                  {...field}
                                />
                              }
                            />
                          </FormControl>
                        )}
                      />
                    </div>
                    <Link
                      style={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#4D4D4D",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                      to="/forgot-password"
                    >
                      Forgot Password?
                    </Link>
                  </Box>
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
                      "&:hover": {
                        backgroundColor: "#EC2C5A",
                      },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={30} color="inherit" />
                    ) : (
                      "Login"
                    )}
                  </Button>
                  <Box
                    mt="12px"
                    sx={{
                      display: "flex",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#4D4D4D",
                      }}
                    >
                      New User?
                      <Link
                        style={{
                          fontWeight: 400,
                          fontSize: "14px",
                          color: "#4D4D4D",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        to="/login"
                      >
                        Register Here
                      </Link>
                    </Typography>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#4D4D4D",
                        cursor: "pointer",
                      }}
                    >
                      Use as Guest
                    </span>
                  </Box>
                </form>
              </Grid>
            </Card>
          </motion.div>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
