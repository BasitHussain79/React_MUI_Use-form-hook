import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Paper, Typography, Button } from "@mui/material";
import FormInputText from "../components/FormInputText";
import FormInputRadio from "../components/FormInputRadio";
import FormInputDropdown from "../components/FormInputDropdown";
import FromInputDate from "../components/FormInputDate";
import FormInputSlider from "../components/FormInputSlider";
import FormInputMultiCheckbox from "../components/FormInputMultiCheckbox";
import FormAutocompleted from "../components/FormAutocompleted";
import FormMultipleAutoComplete from "../components/FormMultipleAutoComplete";
import ValidateInput from "../components/ValidateInput";
import UseArrayField from "../components/UseArrayField";

type MultipleAutoCompleteOptionsType = {
  label: string;
  value: number;
};
interface IFormInput {
  textValue: string;
  radioValue?: string;
  dropdownValue?: string;
  dateValue?: Date;
  sliderValue?: number;
  checkboxValue?: string[];
  autocompleteValue?: string;
  multipleAutoCompleteValue?: Array<MultipleAutoCompleteOptionsType>;
  validateInput: string;
  members?: {
    email: string;
    role: string;
  }[];
}

type defaultValuesType = {
  textValue: string;
  radioValue?: string;
  dropdownValue?: string;
  dateValue?: Date;
  sliderValue?: number;
  checkboxValue?: string[];
  autocompleteValue?: string;
  multipleAutoCompleteValue?: Array<MultipleAutoCompleteOptionsType>;
  validateInput: string;
  members?: {
    email: string;
    role: string;
  }[];
};

const defaultValues: defaultValuesType = {
  textValue: "",
  radioValue: "",
  dropdownValue: "",
  dateValue: new Date(),
  sliderValue: 0,
  checkboxValue: [],
  autocompleteValue: "A",
  multipleAutoCompleteValue: [{ value: 128, label: "B" }],
  validateInput: "",
  members: [],
};

const FormDemo = () => {
  const methods = useForm<IFormInput>({
    defaultValues,
    reValidateMode: "onBlur",
  });
  const { handleSubmit, reset, control: control, setValue, watch } = methods;

  const {
    fields: members,
    append: appendMemberRow,
    remove: removeMemberRow,
  } = useFieldArray({
    name: "members",
    control,
  });
  const handleAppendMemberRow = () =>
    appendMemberRow({ email: "", role: "user" });
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
      {/* multiple autocomplete */}
      <FormMultipleAutoComplete
        name='multipleAutoCompleteValue'
        control={control}
      />
      {/* validate input */}
      <ValidateInput
        label='validateInput'
        name='validateInput'
        control={control}
      />
      {/* array field */}
      <UseArrayField
        control={control}
        members={members}
        handleAppendMemberRow={handleAppendMemberRow}
        removeMemberRow={removeMemberRow}
      />
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
