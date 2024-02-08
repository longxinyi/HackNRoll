import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker, DesktopTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const EnrollmentForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      contact: '',
      date: null,
      time: null,
      skills: [], 
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ '& .MuiTextField-root': { m: 1 }, '& .MuiButton-root': { m: 1 } }}>
        <Controller
          name="contact"
          control={control}
          rules={{ required: 'Contact details required' }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Contact Details"
              variant="outlined"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="date"
            control={control}
            rules={{ required: 'Date required' }}
            render={({ field }) => (
              <DesktopDatePicker
                label="Date"
                inputFormat="MM/DD/YYYY"
                {...field}
                renderInput={(params) => <TextField {...params} />}
              />
            )}
          />

          <Controller
            name="time"
            control={control}
            rules={{ required: 'Time required' }}
            render={({ field }) => (
              <DesktopTimePicker
                label="Time"
                {...field}
                renderInput={(params) => <TextField {...params} />}
              />
            )}
          />
        </LocalizationProvider>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="skills-label">Skills</InputLabel>
          <Controller
            name="skills"
            control={control}
            rules={{ required: 'Skills required' }}
            render={({ field }) => (
              <Select
                {...field}
                labelId="skills-label"
                label="Skills"
                multiple
              >
                <MenuItem value="firstAid">First Aid</MenuItem>
                {/* ... other skills */}
              </Select>
            )}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>
          Enroll
        </Button>
      </Box>
    </form>
  );
};

export default EnrollmentForm;
