
import Card from '@mui/material/Card';
import { Box } from '@mui/material';

import loginImageCard from "../../assets/login.avif"

import "./Login.scss"

const Login = () => {
    return (
        <Card className="login-page__wrapper" variant='outlined' >
            <Card className="login-card" variant='outlined' >
                <Box
                    component="img"
                    alt='login-page__presentation-image'
                    src={loginImageCard}
                    className="login-card__left">
                </Box>
                <Box className="login-card__right">ceva</Box>
            </Card>
        </Card>
    );
}

export default Login;