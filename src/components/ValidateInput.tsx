import { TextField } from "@mui/material";
import React, { FC } from "react";
import { Controller } from "react-hook-form";

type myHelperType = {
  email: {
    required: string;
    pattern: string;
  };
};

const myHelper: myHelperType = {
  email: {
    required: "Email is required",
    pattern: "Invalid Email Address",
  },
};

interface Props {
  name: string;
  control: any;
  label: string;
}

const ValidateInput: FC<Props> = ({ name, control, label }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      rules={{
        required: true,
        pattern: /^[a-zA-Z\s]$/,
      }}
      render={({
        field: { value, onChange, ...field },
        fieldState: { error },
      }) => {
        return (
          <TextField
            onChange={onChange}
            value={value}
            {...field}
            type='text'
            fullWidth
            label={label}
            error={error !== undefined}
            helperText={error ? myHelper.email[error.type] : ""}
          />
        );
      }}
    />
  );
};

export default ValidateInput;
