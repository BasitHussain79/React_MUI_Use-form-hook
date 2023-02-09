import { Container } from "@mui/material";
import React from "react";
import FormDemo from "./pages/FormDemo";

const App = () => {
  return (
    <Container>
      <FormDemo />
    </Container>
  );
};

export default App;

// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormHelperText from "@mui/material/FormHelperText";
// import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// // interface IFormInputs {
// //   agreeToTerms: boolean;
// // }

// const schema = yup
//   .object()
//   .shape({
//     agreeToTerms: yup
//       .boolean()
//       .required("The terms and conditions must be accepted.")
//       .oneOf([true], "The terms and conditions must be accepted."),
//   })
//   .required();

// type FormData = yup.InferType<typeof schema>;

// const App = () => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       agreeToTerms: false,
//     },
//   });

//   // const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
//   const onSubmit = (data: FormData) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name='agreeToTerms'
//         control={control}
//         rules={{ required: true }}
//         render={({ field, fieldState: { error } }) => (
//           <FormControl>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   inputRef={field.ref}
//                   checked={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                 />
//               }
//               label='Label'
//             />
//             {error?.message && (
//               <FormHelperText>{error?.message}</FormHelperText>
//             )}
//           </FormControl>
//         )}
//       />
//       <Button type='submit'>Submit</Button>
//     </form>
//   );
// };

// export default App;
