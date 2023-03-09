import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, Radio, RadioGroup } from '@mui/material';
import { RoleSelectProps } from './RegisterTypes';
import { RadioligistOption, Role } from 'Interface/User';

function RoleSelect(props: RoleSelectProps) {
  // states
  const { role, setRole, reviewerRoleOption, setReviewerRoleOption } = props;

  // consts
  const ROLE_OPTIONS: Array<Role> = ['PI', 'RESEARCHER', 'REVIEWER'];
  const RADIOLOGIST_OPTIONS: Array<RadioligistOption> = ['yes', 'no', 'trainee'];

  // handlers
  const handleRoleRadioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value as Role);
  };

  const handleRadiologistRadioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReviewerRoleOption({ ...reviewerRoleOption, isRadiologist: event.target.value as RadioligistOption });
  };

  const handleExperienceCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReviewerRoleOption({ ...reviewerRoleOption, hasMoreThan3YearsOfExperience: event.target.checked });
  };

  return (
    <>
      <InputLabel>역할 선택</InputLabel>
      <FormControl component="fieldset">
        <RadioGroup onChange={handleRoleRadioGroupChange} defaultValue={ROLE_OPTIONS[0]} name="role" row>
          {ROLE_OPTIONS.map(option => (
            <FormControlLabel key={option} value={option} control={<Radio color="success" />} label={option} />
          ))}
        </RadioGroup>
        {role === 'REVIEWER' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <RadioGroup
              onChange={handleRadiologistRadioGroupChange}
              defaultValue={RADIOLOGIST_OPTIONS[0]}
              name="radiologist"
              row
            >
              {RADIOLOGIST_OPTIONS.map(option => (
                <FormControlLabel key={option} value={option} control={<Radio color="success" />} label={option} />
              ))}
            </RadioGroup>
            <FormControlLabel
              label="Do you have 3+ years of experience in the field?"
              control={
                <Checkbox
                  color="success"
                  checked={reviewerRoleOption.hasMoreThan3YearsOfExperience}
                  onChange={handleExperienceCheckboxChange}
                />
              }
            />
          </Box>
        )}
      </FormControl>
    </>
  );
}

export default RoleSelect;
