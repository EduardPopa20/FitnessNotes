import { useState } from "react";

import { Box, InputAdornment, TextField, Typography, Button, Container } from "@mui/material";
import { PasswordOutlined, AccountCircleOutlined } from "@mui/icons-material";

import FacebookIcon from "../../assets/facebook.png"
import GoogleIcon from "../../assets/google.png"
import InstagramIcon from "../../assets/instagram.png"

import loginImageCard from "../../assets/login.avif";

import "./Login.scss";

const Login = () => {
    const [focusedEmailAdornment, setFocusedEmailAdornment] = useState(false);
    const [focusedPasswordAdornment, setFocusedPasswordAdornment] = useState(false);

    return (
        <Box
            className="login-page__wrapper"
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5%",
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
                    height: "50vh",
                    clipPath: "inset(0 round 5%)",
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className="login-page__adornment"
                                        position="start"
                                        sx={{ color: focusedEmailAdornment ? "#fb8c00" : "" }}>
                                        <AccountCircleOutlined />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                        <TextField
                            className="login-page__input login-page__input--password"
                            label="Password"
                            onFocus={() => { setFocusedPasswordAdornment(true) }}
                            onBlur={() => { setFocusedPasswordAdornment(false) }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className="login-page__input-adornment"
                                        position="start"
                                        sx={{ color: focusedPasswordAdornment ? "#fb8c00" : "" }}>
                                        <PasswordOutlined />
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
                        sx={{ ":hover": { color: "#fb8c00" }, marginBottom: "10px" }}>
                        Sign In
                    </Button>
                    <Typography
                        className="login-page__forgot-password"
                    >
                        Forgot password?
                    </Typography>
                </Box>
            </Container>
        </Box >
    );
};

export default Login;
