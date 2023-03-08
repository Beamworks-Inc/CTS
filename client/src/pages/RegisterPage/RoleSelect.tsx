import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, Radio, RadioGroup } from '@mui/material';
import { RoleSelectProps } from './RegisterTypes';
import { Experience, Role } from 'Interface/User';

function RoleSelect(props: RoleSelectProps) {
  // states
  const { role, setRole, roleOption, setRoleOption } = props;

  // consts
  const ROLE_OPTIONS: Array<Role> = ['PI', 'RESEARCHER', 'REVIEWER'];
  const EXPERIENCE_OPTIONS: Array<Experience> = ['More than 3 years', 'Less than 3 years', 'Trainee'];

  // handlers
  const handleRoleRadioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value as Role);
  };

  const handleExperienceRadioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoleOption({ ...roleOption, experience: event.target.value as Experience });
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoleOption({ ...roleOption, isRadiologist: event.target.checked });
  };

  return (
    <>
      <InputLabel>역할 선택</InputLabel>
      <FormControl component="fieldset">
        <RadioGroup onChange={handleRoleRadioGroupChange} defaultValue={role} name="role" row>
          {ROLE_OPTIONS.map(option => (
            <FormControlLabel key={option} value={option} control={<Radio color="success" />} label={option} />
          ))}
        </RadioGroup>
        {role === 'REVIEWER' && (
          <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
              label="Are you Radiologist?"
              control={<Checkbox color="success" checked={roleOption.isRadiologist} onChange={handleChangeCheckbox} />}
            />
            <RadioGroup
              onChange={handleExperienceRadioGroupChange}
              defaultValue={roleOption.experience}
              name="experience"
              row
            >
              {EXPERIENCE_OPTIONS.map(option => (
                <FormControlLabel key={option} value={option} control={<Radio color="success" />} label={option} />
              ))}
            </RadioGroup>
          </Box>
        )}
      </FormControl>
    </>
  );
}

export default RoleSelect;
