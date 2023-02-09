import React, { FC } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

const options = [
  {
    label: "Dropdown Option 1",
    value: "1",
  },
  {
    label: "Dropdown Option 2",
    value: "2",
  },
];

interface Props {
  label: string;
  control: any;
  name: string;
}

const FormInputDropdown: FC<Props> = ({ name, label, control }) => {
  const genderSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };
  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select value={value || ""} label={label} onChange={onChange}>
            {genderSingleOptions()}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default FormInputDropdown;
