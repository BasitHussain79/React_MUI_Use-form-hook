import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface Props {
  name: string;
  control: any;
  label: string;
  setValue?: any;
}

const FormInputText: FC<Props> = ({ name, control, label }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => {
          return (
            <TextField
              helperText={error ? error.message : null}
              size='small'
              error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              label={label}
              variant='outlined'
            />
          );
        }}
      />
    </div>
  );
};

export default FormInputText;
