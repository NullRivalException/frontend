import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    let navigate = useNavigate();

    const signInFunction = () => {
        let path = 'signin';
        navigate(path);
    }
    
    const signUpFunction = () => {
        let path = 'signup';
        navigate(path);
    }

    return (
        <div>
            <ButtonGroup disableElevation variant="contained">
                <Button color='primary' onClick={signInFunction}>Sign In</Button>
                <Button color='secondary' onClick={signUpFunction}>Sign Up</Button>
            </ButtonGroup>
        </div>
    );
}

export default Dashboard;
