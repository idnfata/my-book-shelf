import React, { useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import {
  ButtonFilled,
  ButtonOutline,
  FieldInputOutline,
  Label,
  UploadImage,
} from "@components";
import { Box, maxWidth } from "@mui/system";
import { getUserInfo, getUserToken } from "@services/redux/action";
import { LogoBCA, LogoBNI, LogoBRI } from "@assets";
import { resizeImage } from "@helpers";
import { currencyInt, formatDecimal, NumberFormatter } from "@helpers/number";

const defaultValues = {
  amount: "",
  attachment: null,
};

const schemaWithoutAttachment = yup.object().shape({
  amount: yup.number().required("Jumlah wajib diisi"),
});

const schemaWithAttachment = yup.object().shape({
  amount: yup.number().required("Jumlah wajib diisi"),
  attachment: yup
    .mixed()
    .nullable()
    .required("Bukti pembayaran wajib diupload"),
});

const Deposit = ({ onClose, getAgentByEmail, dispatch, setUser }) => {
  const token = getUserToken();
  const user = getUserInfo();
  const agent_id = user?.detail?.info?.id;
  const [codeMerchant, setCodeMerchant] = useState(null);
  const [reference, setReference] = useState(null);
  const [detailTransaction, setDetailTransaction] = useState({});
  const [merchant, setMerchant] = useState([]);
  const [bankAccount, setBankAccount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [proccesDeposit, setProccesDeposit] = useState(false);
  let time;
  const arrMonth = [
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

  const attachment_ref = useRef();

  const schema =
    codeMerchant === "manual" ? schemaWithAttachment : schemaWithoutAttachment;

  const { control, formState, handleSubmit, getValues, setValue, clearErrors } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
    });

  const { errors } = formState;

  const onClickMerchant = (code) => {
    setCodeMerchant(code);
  };

  useEffect(() => {
    getAgentByEmail(token)
      .then((res) => {
        console.log("res get detail agent di deposit", res);
        const userInfo = {
          ...user,
          detail: res.data,
        };
        dispatch(setUser(userInfo));
      })
      .catch((err) => err);
  }, []);

  const onSubmitDepositAgent = async (data) => {
    console.log("data amount", data);
    const amount = currencyInt(getValues("amount")) || 0;
    data.amount = amount;
    const formData = new FormData();
    formData.append("method", codeMerchant || "");
    formData.append("amount", data?.amount || "");
    formData.append("attachment", data?.attachment?.value || null);

    setValue("amount", "");
    setLoading(true);
    createAgentDeposit(token, agent_id, formData)
      .then((res) => {
        console.log("res create agent deposit", res.data.data);
        setReference(res.data.data);
      })
      .catch((err) => {
        console.log("err create agent deposit", err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAgentLastDeposit(token, agent_id)
      .then((res) => {
        if (res?.data?.status === "process") {
          console.log(res);
          setReference(res.data.reference);
          if (res.data.reference === "manual") {
            setDetailTransaction(res.data);
          }
        }
        getPaymentChannel(token)
          .then((res) => {
            console.log("res get payment channel", res);
            setMerchant(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log("err get payment channel", err);
          });
        getFirstActiveBankAccount(token)
          .then((res) => {
            console.log("res get first active bank account", res);
            setBankAccount(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log("err get first active bank account", err);
          });
      })
      .catch((err) => {
        console.log("err get last deposit", err);
      });
  }, []);

  useEffect(() => {
    if (reference) {
      setLoading(true);
      console.log("reference", reference);
      if (reference !== "manual") {
        getDetailTransaction(token, reference)
          .then((res) => {
            console.log("res get detail transaction", res);
            // time = new Date(res.data.expired_time);
            // console.log(+ new Date > time);
            const waktuSaatIni = Math.floor(Date.now() / 1000);
            console.log("waktu saat ini", waktuSaatIni);
            console.log("expired time", res.data.expired_time);
            console.log("hasil", waktuSaatIni > res.data.expired_time);
            if (waktuSaatIni > res.data.expired_time) {
              setDetailTransaction({});
            } else {
              setDetailTransaction(res.data);
            }
            // setDetailTransaction(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log("err get detail transaction", err);
          });
      } else {
        console.log("ini adalah manual");
        getAgentLastDeposit(token, agent_id)
          .then((res) => {
            if (res?.data?.status === "process") {
              setDetailTransaction(res.data);
              setLoading(false);
            } else {
              setLoading(false);
              setReference(null);
            }
          })
          .catch((err) => {
            console.log("err get last deposit", err);
          });
      }
    }
  }, [reference]);

  const handleChangeMedia = (files, field) => {
    files.map(async (l) => {
      const image = await resizeImage(l, 300, 300, "JPG", 70);
      const dataImage = {
        preview: URL.createObjectURL(l),
        value: image,
      };
      setValue(field, dataImage, { shouldDirty: true });
    });
  };

  if (loading) {
    return <h3>Loading</h3>;
  }

  if (reference === "manual") {
    return (
      <Stack spacing={2}>
        <div className="flex justify-between items-center">
          <h4>Verifikasi Manual</h4>
          <h6 className="bg-orange-50 border-orange-400 text-orange-400 border-2 py-1 px-3 rounded-6">
            Proses
          </h6>
        </div>
        <p>
          Anda sudah melakukan pembayaran sebesar Rp.{" "}
          {NumberFormatter(detailTransaction?.amount)} dengan bukti pembayaran
          berikut:
        </p>
        <img src={detailTransaction?.attachment} alt={"Gambar"} sx={{width: "100%", maxWidth: "300"}} />
      </Stack>
    );
  }

  if (Object.keys(detailTransaction).length > 0) {
    return (
      <Stack spacing={2}>
        <Stack spacing={2}>
          <div className="flex justify-between items-center">
            <h4>Reference: {detailTransaction.reference}</h4>
            <h6 className="bg-orange-50 border-orange-400 text-orange-400 border-2 py-1 px-3 rounded-6">
              {detailTransaction.status}
            </h6>
          </div>
          <div>
            <h4>Total Pembayaran: </h4>
            <h1>Rp. {NumberFormatter(detailTransaction.amount)}</h1>
            <h6>
              Total pembayaran di atas akan muncul secara otomatis saat Anda
              memasukkan nomor VA yang benar.
            </h6>
          </div>
          <div>
            <h4>{detailTransaction.payment_name}</h4>
            <h2>{detailTransaction.pay_code}</h2>
            <h6>
              Transfer sebelum{" "}
              <b>
                {new Date(detailTransaction.expired_time * 1000).getDate()}{" "}
                {
                  arrMonth[
                    new Date(detailTransaction.expired_time * 1000).getMonth()
                  ]
                }{" "}
                {new Date(detailTransaction.expired_time * 1000).getFullYear()}{" "}
                {new Date(detailTransaction.expired_time * 1000).getHours()}:
                {new Date(detailTransaction.expired_time * 1000).getMinutes()} .
              </b>{" "}
              Jika melebihi waktu tersebut transaksi Anda otomatis dibatalkan.
            </h6>
          </div>
        </Stack>
      </Stack>
    );
  }
  if (!codeMerchant) {
    return (
      <div>
        <Label>Pilih metode pembayaran</Label>
        <Label className="mt-4">Cek Manual (Tidak ada biaya admin)</Label>
        <Stack spacing={1} className="mt-4">
          {bankAccount.map((data) => (
            <Stack
              direction="row"
              spacing={2}
              className="flex items-center shadow rounded p-5 cursor-pointer"
              onClick={() => {
                onClickMerchant("manual");
              }}
            >
              <img
                src={
                  data?.bank_name === "BNI"
                    ? LogoBNI
                    : data?.bank_name === "BRI"
                    ? LogoBRI
                    : data?.bank_name === "BCA"
                    ? LogoBCA
                    : ""
                }
                alt={data?.bank_name}
                width="100"
              />
              <div>
                <h3>AN. {data?.account_name}</h3>
                <h4>{data?.account_number}</h4>
              </div>
            </Stack>
          ))}
        </Stack>
        <Label className="mt-10">Cek Otomatis</Label>
        <Stack spacing={1} className="mt-4">
          {merchant.map((data) => {
            if (data.group === "Virtual Account") {
              return (
                <Stack
                  direction="row"
                  spacing={2}
                  className="flex items-center shadow rounded p-5 cursor-pointer"
                  onClick={() => {
                    onClickMerchant(data.code);
                  }}
                >
                  <img src={data.icon_url} alt={data.name} width="100" />
                  <h2>{data.name}</h2>
                </Stack>
              );
            }
          })}
        </Stack>
        <Box className="flex justify-end mt-12">
          <ButtonOutline onClick={onClose} textButton="Cancel" />
        </Box>
      </div>
    );
  } else {
    return (
      <form
        name="deposit"
        noValidate
        className="flex flex-col justify-center w-full"
        onSubmit={handleSubmit(onSubmitDepositAgent)}
      >
        <Stack className="mt-4" direction="column" spacing={0.5} width="100%">
          <Label>Jumlah</Label>
          <Controller
            name="amount"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FieldInputOutline
                // onChange={onChange}
                onChange={(e) => {
                  setValue("amount", e.target.value);
                }}
                onBlur={onBlur}
                required
                // value={getValues("amount")}
                value={value ? formatDecimal(value) : 0}
                error={!!errors.amount}
                helperText={errors?.amount?.message}
                fullWidth
                placeholder="Masukan jumlah disini"
                sx={{ borderRadius: "8px" }}
              />
            )}
          />
        </Stack>
        {codeMerchant !== "manual" ? (
          ""
        ) : (
          <>
            <Label className="mt-8">Bukti Pembayaran</Label>
            <Controller
              name="attachment"
              control={control}
              render={({ field: { value } }) => (
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box>
                    <UploadImage
                      reff={attachment_ref}
                      id="attachment"
                      multiple={false}
                      value={value?.preview || ""}
                      onClick={() => attachment_ref.current.open()}
                      name="attachment"
                      accept="image/png, image/jpg, image/jpeg"
                      imgMaxWidth={160}
                      imgMaxHeight={160}
                      onDrop={(acceptedFiles) => {
                        clearErrors("attachment");
                        handleChangeMedia(acceptedFiles, "attachment");
                      }}
                      disabled
                      error={!!errors.attachment}
                      helperText={errors?.attachment?.message}
                      placeholder="Drag files or click to browse"
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    sx={{
                      marginLeft: "16px",
                    }}
                  >
                    <Typography sx={{ color: "#697186", fontSize: 14 }}>
                      File Type:{" "}
                      <span style={{ color: "#363E52", fontWeight: "bold" }}>
                        .jpg / .jpeg / .png
                      </span>
                    </Typography>
                    <Typography sx={{ color: "#697186", fontSize: 14 }}>
                      Maximum File Size:{" "}
                      <span style={{ color: "#363E52", fontWeight: "bold" }}>
                        5MB
                      </span>
                    </Typography>
                  </Box>
                </Box>
              )}
            />
          </>
        )}
        <Box className="flex justify-end mt-12">
          <ButtonOutline
            onClick={() => {
              setCodeMerchant(null);
              setValue("amount", "");
              setValue("attachment", null);
            }}
            textButton="Kembali"
          />
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
            textButton={"Submit"}
          />
        </Box>
      </form>
    );
  }
};

export default Deposit;
