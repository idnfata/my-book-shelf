import React from 'react';
import { Grid, Chip, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Checklist from '../../assets/icons/ceklis.svg';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { NumberFormatter } from '@helpers/number';
import { red, yellow } from '@mui/material/colors';
import { AccessTime, AccessTimeFilled, HourglassEmpty } from '@mui/icons-material';
import { tahun_bulan_tanggal, tanggal_bulan_tahun } from '@helpers/date';

const useStyles = makeStyles((a, b) => ({
  ListRoot: {
    borderRadius: '6px',
    '& h4': {
      padding: '11px',
      margin: 0,
      color: '#687083',
      display: 'flex',
      alignItems: 'center',
    },
    '& h5': {
      margin: 0,
      color: 'black',
      display: 'flex',
      marginBottom: '4px',
      marginTop: '5px',
      alignItems: 'center',
      '& img': {
        padding: 0,
        marginLeft: '4px',
      },
    },
    '& p': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      padding: 0,
      margin: 0,
      marginTop: '5px',
    },
  },
  ListWrapper: {
    backgroundColor: '#F9FAFB',
    borderRadius: '6px 6px 0px 0px',
    border: '1px solid #E4E7EB',
    borderBottom: 'none',
  },
}));

export default function ListMovement({
  data,
  onRowsClick,
  key,
  Loading,
  accessFrom = '',
}) {
  const classes = useStyles(onRowsClick);

  const navigate = useNavigate();

  // console.log("data ldw", data);
  // console.log(data[0]?.created_at);

  const tanggal = new Date(data[0]?.created);
  return (
    <Grid
      key={key}
      className={classes.ListRoot}
      container
      sx={{ width: accessFrom !== '' ? '728px' : '100%', }}
    >
      <Grid
        className={classes.ListWrapper}
        container
        alignItems='center'
        justifyContent='space-between'
        backgroundColor='#F5F6F7'
      >
        <h4>
          {data.request_number}
          <FiberManualRecordIcon
            sx={{
              fontSize: '12px',
              marginLeft: '8px',
              marginRight: '8px',
            }}
          />
          {tanggal_bulan_tahun(tanggal)}
        </h4>
      </Grid>
      {data.map((d, index) => (
        <Grid
          sx={{
            border: '1px solid #E4E7EB',
            padding: '16px',
            position: 'relative',
            backgroundColor: 'white',
            '& img': {
              paddingLeft: '24px',
              paddingRight: '24px',
            },
            ':hover': {
              backgroundColor: '#D6F0FD',
              cursor: 'pointer',
            },
          }}
          container
          onClick={(e) => {
            console.log(d);
            e.stopPropagation();
            navigate("/request/detail", {
              state: {
                id: d.id,
                type: d.type,
              },
            });
          }}
        >
          <Grid
            container
            spacing={3}
            // justifyContent="center"
            alignItems="center"
          >
            <Grid item sx={{ color: '#687083', }}>
              <p>{index+1}. </p>
            </Grid>
            <Grid item sx={{ color: '#687083', }}>
              <p>{d?.agent_name}</p>
            </Grid>
            <Grid item textAlign={"center"}>
              <p className=''>{NumberFormatter(d?.amount)}</p>
            </Grid>
          </Grid>
          <Box
            item
            style={{
              color: '#9AB825',
              fontWeight: '600',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              cursor: 'pointer',
              right: '30px',
              // top: '30px',
              textDecoration: 'none',
            }}
          // onClick={() => (window.location.href = '/dashboard/error')}
          // onClick={() => navigate('/dashboard/error')}
          >
            <Chip
              label={d.type}
              size='small'
              sx={{
                textTransform: "capitalize",
                color: '#54B371',
                border: '1px solid #54B371',
                marginRight: '8px',
                backgroundColor: '#E8F5E9',
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
