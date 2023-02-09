import { Autocomplete, TextField } from "@mui/material";
import React, { FC } from "react";
import { Controller } from "react-hook-form";

const options = ["A", "B", "C", "D", "E", "F"];

interface Props {
  name: string;
  control: any;
}

const FormAutocompleted: FC<Props> = ({ name, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={options[0]}
      render={({ field: { ref, onChange, ...field } }) => (
        <Autocomplete
          options={options}
          onChange={(_, data) => onChange(data)}
          defaultValue={options[1]}
          renderInput={(params) => (
            <TextField
              {...params}
              {...field}
              fullWidth
              inputRef={ref}
              variant='outlined'
              label={name}
            />
          )}
        />
      )}
    />
  );
};

export default FormAutocompleted;
