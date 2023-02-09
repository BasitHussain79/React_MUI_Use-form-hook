import React from "react";
import { useForm } from "react-hook-form";
import { Paper, Typography, Button } from "@mui/material";
import FormInputText from "../components/FormInputText";
import FormInputRadio from "../components/FormInputRadio";
import FormInputDropdown from "../components/FormInputDropdown";
import FromInputDate from "../components/FormInputDate";
import FormInputSlider from "../components/FormInputSlider";
import FormInputMultiCheckbox from "../components/FormInputMultiCheckbox";
import FormAutocompleted from "../components/FormAutocompleted";
interface IFormInput {
  textValue: string;
  radioValue: string;
  dropdownValue: string;
  dateValue: Date;
  sliderValue: number;
  checkboxValue: string[];
  autocompleteValue: string;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  dropdownValue: "",
  dateValue: new Date(),
  sliderValue: 0,
  checkboxValue: [],
  autocompleteValue: "A",
};

const FormDemo = () => {
  const methods = useForm<IFormInput>({ defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;

  // console.log(watch("textValue"));

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant='h6'>Form MUI Demo</Typography>
      {/* text input */}
      <FormInputText name='textValue' control={control} label='TextInput' />
      {/* radio input */}
      <FormInputRadio name='radioValue' control={control} label='Radio' />
      {/* drop down option */}
      <FormInputDropdown
        name='dropdownValue'
        control={control}
        label='Dropdown'
      />
      {/* slider input */}
      <FormInputSlider
        name='SliderValue'
        control={control}
        setValue={setValue}
        label='Slider Input'
      />
      {/* date input */}
      <FromInputDate name='dateValue' control={control} label='Date Input' />
      {/* checkbox */}
      <FormInputMultiCheckbox
        name='checkboxValue'
        control={control}
        label='Checkbox'
        setValue={setValue}
      />
      {/* autocomplete */}
      <FormAutocompleted name='autocompleteValue' control={control} />
      {/* submit */}
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
      <Button onClick={() => reset()} variant={"contained"}>
        Reset
      </Button>
    </Paper>
  );
};

export default FormDemo;
