import { ChangeEvent, useState } from "react";

import { Box, InputAdornment, TextField, Typography, Button, Container, IconButton } from "@mui/material";
import { PasswordOutlined, AccountCircleOutlined, Visibility, VisibilityOff } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";

import FacebookIcon from "../../assets/facebook.png"
import GoogleIcon from "../../assets/google.png"
import InstagramIcon from "../../assets/instagram.png"

import loginImageCard from "../../assets/login.avif";

import ErrorDisplayer from "../../components/ErrorDisplayer/ErrorDisplayer";

import "./Login.scss";

import {
    hasAtLeast8Characters,
    hasAtLeastOneDigit,
    hasAtLeastOneLowercase,
    hasAtLeastOneSpecial,
    hasAtLeastOneUppercase,
    hasAtMost20Characters,
    isRequiredField,
    isValidEmail
} from "../../utils/validations/auth";
import { login } from "../../services/auth/login";
import Paths from "../../utils/Paths";

const Login = () => {
    const navigate = useNavigate();

    const [focusedEmailAdornment, setFocusedEmailAdornment] = useState(false);
    const [focusedPasswordAdornment, setFocusedPasswordAdornment] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [emailError, setEmailError] = useState<string>('');
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [submitLoginError, setSubmitLoginError] = useState<string>('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailError("");
        const inputValue = e.target.value;

        setEmail(inputValue)

        const isRequiredErrorMessage = isRequiredField(inputValue);

        if (!isRequiredErrorMessage) {
            const isValidError = isValidEmail(inputValue);

            setEmailError(isValidError);
        }
        else {
            setEmailError(isRequiredErrorMessage)
        }
    }

    const handlePasswordChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        validations: ((value: any, secondaryValue?: any) => string)[]) => {

        setPassword(e.target.value);

        let errorMessages: string[] = [];

        validations.forEach(validation => {
            let currentErrorMessage = validation(e.target.value);

            if (currentErrorMessage)
                errorMessages.push(currentErrorMessage);
        })

        setPasswordErrors(errorMessages)
    }

    const handleLogin = async () => {
        const { error, message } = await login(email, password);
        if (error) {
            setSubmitLoginError(message)
        }
        else {
            setTimeout(() => navigate(Paths.home), 500);
        }
    }

    return (
        <Box
            className="login-page__wrapper"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Container
                className="login-page__card-wrapper"
                sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxwidth: "980px",
                    gap: "20px"
                }}
            >
                <Box
                    className="login-page__card login-page__card--left"
                    sx={{ backgroundImage: `url(${loginImageCard}) ` }}
                >

                </Box>
                <Box maxWidth="md"
                    className="login-page__card login-page__card--right"
                >
                    <Typography
                        className="login-page__heading"
                        variant="h4">
                        FitnessNotes
                    </Typography>
                    <Box
                        className="login-page__form"
                    >
                        <TextField
                            className="login-page__input login-page__input--email"
                            label="Email"
                            onFocus={() => { setFocusedEmailAdornment(true) }}
                            onBlur={() => { setFocusedEmailAdornment(false) }}
                            onChange={handleEmailChange}
                            helperText={<ErrorDisplayer errors={[emailError]} />}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className="login-page__adornment"
                                        position="start"
                                        sx={{ color: focusedEmailAdornment ? "#fb6200" : "" }}>
                                        <AccountCircleOutlined />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                        <TextField
                            className="login-page__input login-page__input--password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            onFocus={() => { setFocusedPasswordAdornment(true) }}
                            onBlur={() => { setFocusedPasswordAdornment(false) }}
                            onChange={(e) =>
                                handlePasswordChange(
                                    e,
                                    [
                                        isRequiredField,
                                        hasAtLeast8Characters,
                                        hasAtMost20Characters,
                                        hasAtLeastOneUppercase,
                                        hasAtLeastOneLowercase,
                                        hasAtLeastOneDigit,
                                        hasAtLeastOneSpecial
                                    ]
                                )}
                            helperText={<ErrorDisplayer errors={passwordErrors} />}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className="login-page__input-adornment"
                                        position="start"
                                        sx={{ color: focusedPasswordAdornment ? "#fb6200" : "" }}>
                                        <PasswordOutlined />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                    >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => { setShowPassword(!showPassword) }}
                                            onMouseDown={(e) => { e.preventDefault() }}
                                            sx={{ color: focusedPasswordAdornment ? "#fb6200" : "" }}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Box>
                    <Box className="or-container">
                        <Box className="line"></Box>
                        <Box className="circle">OR</Box>
                        <Box className="line"></Box>
                    </Box>
                    <Typography className="input-error">
                        {submitLoginError}
                    </Typography>
                    <Box
                        className="login-page__third-party-wrapper"
                    >
                        <Box
                            className="login-page__third-party-button">
                            <img
                                src={FacebookIcon}
                                alt="facebook-logo"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box
                            className="login-page__third-party-button">
                            <img
                                src={GoogleIcon}
                                alt="google-logo"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box
                            className="login-page__third-party-button">
                            <img
                                src={InstagramIcon}
                                alt="instagram-logo"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>

                    </Box>
                    <Button
                        variant="outlined"
                        className="custom-button login-page__sign-in-button"
                        onClick={handleLogin}
                    >
                        Sign In
                    </Button>
                    <Box>
                        <Typography>
                            <Link
                                className="custom-link login-page__forgot-password-link"
                                to={"/recover-password"}
                            >
                                Forgot password?
                            </Link>
                        </Typography>
                        <Typography>
                            New here?{" "}
                            <Link className="custom-link register-page__sign-up-link" to="/register">Sign up</Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box >
    );
};

export default Login;
