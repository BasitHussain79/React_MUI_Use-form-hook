import React, { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const options = [
  { value: 64, label: "A" },
  { value: 128, label: "B" },
  { value: 256, label: "C" },
  { value: 512, label: "D" },
  { value: 1024, label: "E" },
];

interface Props {
  name: string;
  control: any;
}

const FormMultipleAutoComplete: FC<Props> = ({ name, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[options[1]]}
      render={({ field: { ref, onChange, ...field } }) => (
        <Autocomplete
          // adding multiple
          multiple
          options={options}
          // tell what is showing
          getOptionLabel={(option) => option.label}
          onChange={(_, data) => {
            console.log("testing", data);
            return onChange(data);
          }}
          defaultValue={[options[1]]}
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
          ref={ref}
        />
      )}
    />
  );
};

export default FormMultipleAutoComplete;
