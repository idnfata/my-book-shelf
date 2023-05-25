import { Stack, Typography } from "@mui/material";
import Resizer from "react-image-file-resizer";

export const resizeImage = (
  file,
  maxWidth = 800,
  maxHeight = 800,
  format = "JPG",
  quality = 85
) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      format,
      quality,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


export const httpStatus = (code) => {
  let statusText;
  switch (code) {
    case 200:
      statusText = 'OK';
      break;
    case 400:
      statusText = `Kesalahan pada permintaan, code: ${code}`;
      break;
    case 401:
      statusText = `Otentikasi tidak valid, code: ${code}`;
      break;
    case 404:
      statusText = `Endpoint tidak ditemukan, code: ${code}`;
      break;
    case 405:
      statusText = `Metode tidak diizinkan, code: ${code}`;
      break;
    case 408:
      statusText = `Waktu permintaan habis, code: ${code}`;
      break;
    case 409:
      statusText = `Permintaan konflik, code: ${code}`;
      break;
    case 422:
      statusText = `Entitas tidak dapat diproses, code: ${code}`;
      break;
    case 431:
      statusText = `Permintaan terlalu besar, code: ${code}`;
      break;
    case 429:
      statusText = `Permintaan terlalu banyak, code: ${code}`;
      break;
    default:
      statusText = `Terjadi kesalahan pada server, code: ${code}`;
      break;
  }
  return statusText;
};


export const notificationText = (action, text) => {
  return (
    <Stack direction="row" spacing={1}>
      <Typography className="font-bold">{action}</Typography>
      <Typography>{text}</Typography>
    </Stack>
  );
};

export const statusColor = (status) => {
  switch (status) {
    case 'waiting':
      return {
        colors: 'orange',
        statusVal: 'Menunggu',
      };
    case 'waiting ppk':
      return {
        colors: 'orange',
        statusVal: 'Menunggu PPK',
      };
    case 'waiting served':
      return {
        colors: 'orange',
        statusVal: 'Menunggu Dilayani',
      };
    case 'waiting approval':
      return {
        colors: 'orange',
        statusVal: 'Menunggu Disetujui',
      };
    case 'canceled':
      return {
        colors: 'red',
        statusVal: 'Dibatalkan',
      };
    case 'declined':
      return {
        colors: 'red',
        statusVal: 'Ditolak',
      };
    case 'accepted':
      return {
        colors: 'green',
        statusVal: 'Diterima',
      };
    case 'process':
      return {
        colors: 'grey',
        statusVal: 'Proses',
      };
    case 'done':
      return {
        colors: 'green',
        statusVal: 'Selesai',
      };
    case 'PENDING':
      return {
        colors: 'blue',
        statusVal: 'Ditunda',
      };
    case 'active':
      return {
        colors: 'green',
        statusVal: 'Active',
      };
    case 'verified':
      return {
        colors: 'green',
        statusVal: 'Verified',
      };
    case 'inactive':
      return {
        colors: 'red',
        statusVal: 'Inactive',
      };
    case 'Belum Lunas':
      return {
        colors: 'red',
        statusVal: 'Belum Lunas',
      };
    case 'Lunas':
      return {
        colors: 'green',
        statusVal: 'Lunas',
      };
    case 'unverified':
      return {
        colors: 'red',
        statusVal: 'Unverified',
      };
    default:
      return {
        colors: 'grey',
        statusVal: status,
      };
  }
};
