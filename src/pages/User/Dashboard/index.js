import React, { useEffect, useState } from "react";

import "./style.css";
import { DatePickers } from "@components";
import PageHeading from "components/Layout/PageHeading";
import { getUserInfo  } from "@services/redux/action";
import { useLocation } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { tahun_bulan_tanggal } from "@helpers/date";

import { useDispatch } from "react-redux";


const initialParams = {
  agent_id: "",
  start_date: "",
  end_date: "",
};

const AgentDashboard = () => {
  const user = getUserInfo();
  const agent_id = user?.detail?.info?.id;
  initialParams.agent_id = agent_id;
  
  const [params, setParams] = useState(initialParams);
  const { search } = useLocation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });


  useEffect(() => {
    setParams({
      ...params,
      start_date: watch("date") ? tahun_bulan_tanggal(watch("date")) : "",
    })
  }, [watch("date")]);


  return (
    <React.Fragment>
      <PageHeading
        title={`Selamat Datang ${user?.username}!`}
        endElement={
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePickers
                required
                fullWidth
                value={value ?? new Date()}
                onBlur={onBlur}
                onChange={onChange}
                error={!!errors.date}
                helperText={errors?.date?.message}
              />
            )}
          />
        }
      />
   
    </React.Fragment>
  );
};

export default AgentDashboard;
