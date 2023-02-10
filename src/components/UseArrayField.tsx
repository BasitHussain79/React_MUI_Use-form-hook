import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { FC } from "react";
import { Controller } from "react-hook-form";

interface Props {
  control: any;
  members: any;
  removeMemberRow: any;
  handleAppendMemberRow: any;
}

const UseArrayField: FC<Props> = ({
  control,
  members,
  removeMemberRow,
  handleAppendMemberRow,
}) => {
  return (
    <div>
      {members.map((field: any, index: number) => (
        <Grid container key={field.id} spacing={1} alignItems='center'>
          <Grid item xs={6}>
            <Controller
              control={control}
              name={`members[${index}].email`}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  type='email'
                  variant='outlined'
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name={`members[${index}].role`}
              defaultValue='user'
              render={({ field }) => (
                <Select {...field} fullWidth>
                  <MenuItem value='user'>User</MenuItem>
                  <MenuItem value='admin'>Admin</MenuItem>
                </Select>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              type='button'
              variant='text'
              onClick={() => removeMemberRow(index)}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      ))}
      <Button type='button' variant='text' onClick={handleAppendMemberRow}>
        Add Row
      </Button>
    </div>
  );
};

export default UseArrayField;
