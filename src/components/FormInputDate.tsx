import React, { FC } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";

interface Props {
  name: string;
  control: any;
  label: string;
}

const FormInputDate: FC<Props> = ({ name, control, label }) => {
  //   const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState, formState }) => {
          return (
            <DatePicker
              label={label}
              value={value || null}
              minDate={dayjs("2023-01-01")}
              onChange={onChange}
              renderInput={(params) => <TextField {...params} />}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default FormInputDate;
