import React from 'react';
import { Grid, Chip, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Checklist from '../../assets/icons/ceklis.svg';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { NumberFormatter } from '@helpers/number';
import { red, yellow } from '@mui/material/colors';
import { AccessTime, AccessTimeFilled, HourglassEmpty } from '@mui/icons-material';
import { statusColor } from '@helpers/index';
import styled from 'styled-components';

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

const GridContainer = styled.div`
  display: flex;
  gap: 0 20px;

  .dalam {
    display: flex;
    gap: 0 20px;
  }

  .kapal-2 {
    display: none;
  }

  .container-bottom .chip {
    display: none;
  }

  @media screen and (max-width: 1010px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 10px 20px;

    .dalam {
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

    .dalam .kapal-container {
      width: 30%;
    }

    .dalam .dari {
      width: 30%;
    }

    .dalam .ke {
      text-align: right;
      width: 30%;
    }

    .dalam .kapal {
      display: none;
    }

    .dalam .range {
      width: 100%;
    }

    .kapal-2 {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    
    .container-bottom {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .container-bottom .chip {
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    .dalam .kapal-container {
      width: 30%;
    }
  }
`;

const BoxItem = styled(Box)`
  color: #244b99;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  alignItems: center;
  position: absolute;
  cursor: pointer;
  right: 30px;
  top: 30px;
  textDecoration: none;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
  
const ChipContainer = styled.div`
  @media screen and (max-width: 1010px) {
    display: none;
  }
`

const ChipItem = styled(Chip)`
  display: none;
`;

export default function ListMovement({
  data,
  onRowsClick,
  key,
  Loading,
  accessFrom = '',
}) {
  const classes = useStyles(onRowsClick);

  return (
    <Grid
      key={key}
      className={classes.ListRoot}
      container
      sx={{ width: accessFrom !== '' ? '728px' : '100%' }}
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
          {data.request_date} at {data.request_time}
        </h4>
        {accessFrom === '' && (
          <ChipContainer>
            <Chip
              icon={
                data.request_status === "done" ? (
                  <CheckCircleIcon
                    sx={{
                      height: '20px',
                      color: '#54B371!important',
                    }}
                  />
                )
                  :
                  data.request_status === "waiting ppk" || data.request_status === "waiting approval" || data.request_status === "waiting served" ? (
                    <AccessTimeFilled
                      sx={{
                        height: '20px',
                        color: `#ff9800 !important`,
                      }}
                    />
                  )
                    : data.request_status === "process" ? (
                      <AutorenewIcon
                        sx={{
                          height: '20px',
                          color: `#616161 !important`,
                        }}
                      />
                    )
                      : (
                        <CancelIcon
                          sx={{
                            height: '20px',
                            color: `${red[500]}!important`,
                          }}
                        />
                      )
              }
              label={statusColor(data?.request_status)?.statusVal}
              size='small'
              sx={{
                textTransform: "capitalize",
                color:
                  data.request_status === "done" ? '#54B371' :
                    data.request_status === "waiting ppk" || data.request_status === "waiting approval" || data.request_status === "waiting served" ? "#ff9800" :
                      data.request_status === "process" ? "#616161" :
                        red[500],
                border: `1px solid ${data.request_status === "done" ? '#54B371' :
                  data.request_status === "waiting ppk" || data.request_status === "waiting approval" || data.request_status === "waiting served" ? "#ff9800" :
                    data.request_status === "process" ? "#616161" :
                      red[500]
                  }`,
                marginRight: '8px',
                backgroundColor:
                  data.request_status === "done" ? '#E8F5E9' :
                    data.request_status === "waiting ppk" || data.request_status === "waiting approval" || data.request_status === "waiting served" ? "#FFF3E0" :
                      data.request_status === "process" ? "#eeeeee" :
                        red[50],
              }}
            />
          </ChipContainer>
        )}
      </Grid>
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
            backgroundColor: onRowsClick && '#D6F0FD',
            cursor: onRowsClick && 'pointer',
          },
        }}
        container
        onClick={onRowsClick}
      >
        <GridContainer>
          <div className='dalam'>
            <div className='dari' sx={{ color: '#687083', }}>
              <h5>Dari</h5>
              <p>{data.destination_from}</p>
            </div>
            <div textAlign={"center"} className='kapal-container'>
              <div className='flex justify-center items-center gap-5 kapal'>
                <p className=''>Kapal</p>
                <p style={{ color: '#687083' }}>{data.ship_name}</p>
                <p style={{ fontSize: 14 }}>{data.ship_grt}</p>
              </div>
              <div className="range">
                <div className="range-start"></div>
                <div className="range-line"></div>
                <div className="range-end"></div>
              </div>
              <div className='flex justify-center items-center gap-5 kapal'>
                <p className=''>Tongkang</p>
                <p style={{ color: '#687083' }}>{data.barge_name}</p>
                <p style={{ fontSize: 14 }}>{data.barge_grt}</p>
              </div>
            </div>
            <div className='ke' sx={{ color: '#687083', }}>
              <p>Ke</p>
              <p>{data.destination_to}</p>
            </div>
          </div>
          <div className='kapal-2'>
            <div className='flex flex-col justify-start items-start gap-2 kapal'>
              <p className=''>Kapal</p>
              <p style={{ color: '#687083' }}>{data.ship_name}</p>
            </div>
            <div className='flex flex-col justify-end items-end gap-2 kapal'>
              <p className=''>Tongkang</p>
              <p style={{ color: '#687083' }}>{data.barge_name}</p>
            </div>
          </div>
          <div className='container-bottom'>
            <div
              className='total-fee'
              sx={{
                paddingRight: '40px',
                paddingLeft: '4px',
                color: '#687083',
                borderRight: Loading && '1px solid #E4E7EB',
              }}
            >
              <h5>Total Biaya Layanan</h5>

              <div style={{ display: 'flex' }}>
                <p>Rp.{NumberFormatter(data.total_service_fee)}</p>
              </div>

            </div>
              <Chip className='chip'
                icon={
                  data.request_status === "done" ? (
                    <CheckCircleIcon
                      sx={{
                        height: '20px',
                        color: '#54B371!important',
                      }}
                    />
                  )
                    :
                    data.request_status === "waiting ppk" || data.request_status === "waiting approval" ? (
                      <AccessTimeFilled
                        sx={{
                          height: '20px',
                          color: `#ff9800 !important`,
                        }}
                      />
                    )
                      : data.request_status === "process" ? (
                        <AutorenewIcon
                          sx={{
                            height: '20px',
                            color: `#616161 !important`,
                          }}
                        />
                      )
                        : (
                          <CancelIcon
                            sx={{
                              height: '20px',
                              color: `${red[500]}!important`,
                            }}
                          />
                        )
                }
                label={statusColor(data?.request_status)?.statusVal}
                size='small'
                sx={{
                  textTransform: "capitalize",
                  color:
                    data.request_status === "done" ? '#54B371' :
                      data.request_status === "waiting ppk" || data.request_status === "waiting approval" ? "#ff9800" :
                        data.request_status === "process" ? "#616161" :
                          red[500],
                  border: `1px solid ${data.request_status === "done" ? '#54B371' :
                    data.request_status === "waiting ppk" || data.request_status === "waiting approval" ? "#ff9800" :
                      data.request_status === "process" ? "#616161" :
                        red[500]
                    }`,
                  marginRight: '8px',
                  backgroundColor:
                    data.request_status === "done" ? '#E8F5E9' :
                      data.request_status === "waiting ppk" || data.request_status === "waiting approval" ? "#FFF3E0" :
                        data.request_status === "process" ? "#eeeeee" :
                          red[50],
                }}
              />

          </div>
        </GridContainer>
        {!Loading && accessFrom === '' && (
          <BoxItem
            item
            onClick={onRowsClick}
          >
            <span className='span'>Lihat Detail</span>
            <ArrowRightAltIcon />
          </BoxItem>
        )}
      </Grid>
    </Grid>
  );
}
