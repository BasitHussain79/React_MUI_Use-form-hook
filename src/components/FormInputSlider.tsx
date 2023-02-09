import React, { FC, useEffect, useState } from "react";
import { FormLabel, Slider } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control: any;
  setValue?: any;
}
const FormInputSlider: FC<Props> = ({ label, name, control, setValue }) => {
  const [sliderValue, setSliderValue] = useState<number>(30);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [sliderValue]);

  return (
    <>
      <FormLabel component='legend'>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <Slider
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay='auto'
            min={0}
            max={100}
            step={1}
          />
        )}
      />
    </>
  );
};

export default FormInputSlider;
