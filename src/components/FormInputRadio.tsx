import React, { FC } from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const options = [
  {
    label: "Radio Option 1",
    value: "1",
  },
  {
    label: "Radio Option 2",
    value: "2",
  },
];

interface Props {
  name: string;
  control: any;
  label: string;
}

const FormInputRadio: FC<Props> = ({ name, control, label }) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <div>
      <FormControl>
        <FormLabel component='legend'>{label}</FormLabel>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <RadioGroup value={value || ""} onChange={onChange}>
              {generateRadioOptions()}
            </RadioGroup>
          )}
        />
      </FormControl>
    </div>
  );
};

export default FormInputRadio;
