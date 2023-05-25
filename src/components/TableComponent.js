import React, { Fragment, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  TableHead,
  TableRow,
  Toolbar,
  Grid,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
  Button,
  Paper,
  Table,
  Collapse,
  TableBody,
  TableCell,
  TableContainer,
  Popper,
  Grow,
  ClickAwayListener,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ChevronDownCircle from "@assets/icons/bx-chevron-down-circle.svg";
import { useForm } from "react-hook-form";
import SelectFilterComponent from "./SelectFilterComponent";
import { FieldInputOutline } from "./InputText";
import { colors } from "@styles";
import { IconUpDown } from "@assets";
import { KeyboardArrowDown } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    color: "#A0B842 !important",
    "& checked": {
      color: "#A0B842 !important",
    },
  },
  wrapper: {
    "& .card-wrapper": {
      "& h4": {
        margin: 0,
      },
    },
  },
  textFieldRoot: {
    "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
      padding: "0px !important",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

export function TableComponent({
  column,
  rows,
  onRowsClick,
  onSearchTable,
  onFilterTable,
  onRowsChange,
  onPageChange,
  onSortTable,
  size,
  collapse,
  endButton,
  defaultValueSearch,
  limit = 10,
  totalData = 0,
  totalPage,
  page = 1,
  filterType = "multi",
  dataFilter = { data: [], loading: false },
  multipleValue = false,
  filterPlaceholder = "Filter",
  setSelectedFilter,
  selectedFilter,
  multipleFilterComponent,
  withTitle,
  color,
}) {
  const classes = useStyles();
  const [tableColapse, setTableColapse] = useState(null);
  const [open, setOpen] = useState(false);

  const anchorRef = React.useRef();

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current.focus();
    prevOpen.current = open;
  }, [open]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) return;
    setOpen(!open);
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      // partner_type_id: null,
    },
  });

  const onSearch = (val) => {
    onSearchTable(val);
  };

  return (
    <TableContainer component={Paper} sx={{ overflow: "unset" }}>
      {withTitle && (
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            paddingTop: "15px",
            px: "25px",
            marginBottom: "-5px",
          }}
        >
          {withTitle}
        </Typography>
      )}
      {(onSearchTable || onFilterTable) && (
        <Toolbar sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Grid container>
            {onSearchTable && (
              <FormControl sx={{ width: "200px" }} size="small">
                <form action="" onSubmit={handleSubmit(onSearch)}>
                  <FieldInputOutline
                    fullWidth
                    placeholder="Search"
                    inputProps={{ ...register("search") }}
                    defaultValue={defaultValueSearch}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    }
                  />
                </form>
              </FormControl>
            )}
          </Grid>
          <Grid container justifyContent="flex-end" gap="12px">
            {onFilterTable && (
              <>
                {filterType === "multi" ? (
                  <>
                    <Button
                      variant="outlined"
                      startIcon={<FilterListIcon sx={{ color: "#9AA2B1" }} />}
                      sx={{
                        color: "black",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        padding: "10px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                      }}
                      onClick={handleToggle}
                      ref={anchorRef}
                      id="composition-button"
                      aria-controls={open ? "composition-filter" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                    >
                      Filter
                    </Button>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                      sx={{
                        zIndex: 999,
                      }}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                          sx={{ marginTop: "-15px" }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              {multipleFilterComponent ? (
                                multipleFilterComponent
                              ) : (
                                <p>Filter</p>
                              )}
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </>
                ) : (
                  <SelectFilterComponent
                    dataFilter={dataFilter}
                    multipleValue={multipleValue}
                    filterPlaceholder={filterPlaceholder}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                  />
                )}
              </>
            )}
            {endButton && endButton}
          </Grid>
        </Toolbar>
      )}
      <div style={{ overflow: "auto" }}>
        <Table
          sx={{ minWidth: 700, whiteSpace: "nowrap" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              {collapse && (
                <StyledTableCell
                  size="small"
                  sx={{
                    backgroundColor: "#EEF0F6",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    color: "#687083",
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "10px",
                  }}
                ></StyledTableCell>
              )}
              {column.map((res, i) => {
                return (
                  <StyledTableCell
                    key={i}
                    size="small"
                    sx={{
                      backgroundColor: "#EEF0F6",
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      color: "#687083",
                      width: res.minWidth,
                      paddingLeft: size === "small" ? 0 : "",
                      paddingRight: size === "small" ? 0 : "",
                      cursor: res?.field ? "pointer" : "normal",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSortTable && res?.field && onSortTable(res?.field);
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      {res.name}
                      {onSortTable && res?.field && (
                        <img src={IconUpDown} width={12} height={12} />
                      )}
                    </div>
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ?
              rows.map((row, index) => {
                return (
                  <Fragment key={index}>
                    <StyledTableRow
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        onRowsClick && onRowsClick(row);
                      }}
                      sx={{
                        ":hover": {
                          backgroundColor: onRowsClick && "#D6F0FD",
                          cursor: onRowsClick && "pointer",
                        },
                      }}
                    >
                      {collapse && (
                        <StyledTableCell sx={{ padding: 0 }}>
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              tableColapse === row.id
                                ? setTableColapse(null)
                                : setTableColapse(row.id);
                            }}
                            sx={{
                              transform:
                                tableColapse === row.id && "rotate(180deg)",
                            }}
                          >
                            <img src={ChevronDownCircle} alt="" />
                          </IconButton>{" "}
                        </StyledTableCell>
                      )}
                      {column.map((res, i) => {
                        return (
                          <StyledTableCell
                            key={i}
                            align={res.align || "left"}
                            sx={{ padding: size === "small" ? 0 : "" }}
                          >
                            {res.renderCell
                              ? res.renderCell(row, index)
                              : "No Data"}
                          </StyledTableCell>
                        );
                      })}
                    </StyledTableRow>
                    {collapse && (
                      <StyledTableRow sx={{ backgroundColor: "#F5F6F7" }}>
                        <TableCell sx={{ padding: 0 }}></TableCell>
                        <TableCell
                          sx={{
                            paddingBottom: 0,
                            paddingTop: 0,
                          }}
                          colSpan={column.length}
                        >
                          <Collapse
                            in={tableColapse === row.id}
                            timeout="auto"
                            unmountOnExit
                            sx={{ width: "100%" }}
                          >
                            {collapse(row)}
                          </Collapse>
                        </TableCell>
                      </StyledTableRow>
                    )}
                  </Fragment>
                );
              })
              :
              <tr>
                <td colSpan={column.length} className="py-10" style={{
                  borderBottom: "1px solid rgba(224, 224, 224, 1)",
                  fontSize: "15px",
                }}>
                  <p className="text-center">Data tidak ditemukan</p>
                </td>
              </tr>
            }
          </TableBody>
        </Table>
      </div>
      {(onRowsChange || onPageChange) && (
        <Toolbar
          sx={{
            paddingLeft: "0px",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "#687083",
          }}
        >
          <Grid container>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {onRowsChange && (
                <>
                  Show
                  <FormControl fullWidth sx={{ ml: 1, width: "97px" }}>
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={limit}
                      onChange={onRowsChange}
                      style={{
                        position: "relative",
                        maxWidth: "88px",
                        borderRadius: "8px",
                        padding: "0px",
                        fontSize: "13px",
                      }}
                      IconComponent={() => (
                        <KeyboardArrowDown
                          fontSize="small"
                          style={{ position: "absolute", right: 10 }}
                        />
                      )}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                    </Select>
                  </FormControl>
                  items
                </>
              )}
            </Grid>
            {onPageChange && (
              <Grid
                item
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                justifyContent="flex-end"
              >
                Show {limit * (page - 1) + 1}-
                {limit * page > totalData ? totalData : limit * page} from{" "}
                {totalData}

                <Button
                  disabled={page === 1}
                  onClick={() => onPageChange(page - 1)}
                  sx={{
                    borderRadius: 0,
                    marginLeft: 2,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    padding: "7px 16px",
                    border: "1px solid #E3E6EF",
                    backgroundColor: colors(color).primary[50],
                    fontSize: "12px",
                    "&.MuiButton-root": {
                      paddingLeft: 2,
                      paddingRight: 2,
                      textDecoration: "none",
                      textTransform: "none",
                      color: colors(color).primary[700],
                    },
                    "&:hover": {
                      color: "white",
                      backgroundColor: colors(color).primary[700],
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "white",
                      color: "#CDD2DF",
                      border: "1px solid #E3E6EF",
                      borderRight: "none",
                    },
                  }}
                >
                  Previous
                </Button>

                {rows && (
                  <Button
                    key={page}
                    id={page}
                    onClick={(e) => onPageChange(e.target.id)}
                    sx={{
                      borderRadius: 0,
                      padding: "7px 0px",
                      minWidth: 40,
                      maxWidth: 40,
                      maxHeight: 40,
                      fontSize: "13px",
                      backgroundColor: colors(color).primary[700],
                      borderColor: colors(color).primary[700],

                      color: "white",
                      "&:hover": {
                        backgroundColor: colors(color).primary[700],
                        color: "white",
                      },
                    }}
                  >
                    {page}
                  </Button>
                )}

                <Button
                  disabled={limit * page > totalData ? true : false}
                  onClick={() => onPageChange(page + 1)}
                  sx={{
                    borderRadius: 0,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    padding: "7px 16px",
                    backgroundColor: colors(color).primary[50],
                    fontSize: "12px",
                    "&.MuiButton-root": {
                      paddingLeft: 2,
                      paddingRight: 2,
                      textDecoration: "none",
                      textTransform: "none",
                      color: colors(color).primary[700],
                      border: "1px solid #E3E6EF",
                    },
                    "&:hover": {
                      color: "white",
                      backgroundColor: colors(color).primary[700],
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "white",
                      color: "#CDD2DF",
                      border: "1px solid #E3E6EF",
                      borderLeft: "none",
                    },
                  }}
                >
                  Next
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      )}
    </TableContainer>
  );
}
