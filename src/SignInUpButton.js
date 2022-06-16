import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function SignInUpButton() {
  return (
    <ButtonGroup disableElevation variant="contained">
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </ButtonGroup>
  );
}
