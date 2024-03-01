import { FocusEvent, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import { TextField, Grid, Box, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Register.scss";

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    birthday: string;
    height: string;
    weight: string;
    phone: string;
}

interface Errors {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
    username: boolean;
    birthday: boolean;
    height: boolean;
    weight: boolean;
    phone: boolean;
}

export default function FormWithMaterialUI() {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        birthday: '',
        height: '',
        weight: '',
        phone: ''
    });

    const [errors, setErrors] = useState<Errors>({
        email: false,
        password: false,
        confirmPassword: false,
        username: false,
        birthday: false,
        height: false,
        weight: false,
        phone: false
    });

    const isMobile = useMediaQuery('(max-width:768px)');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setErrors({
            ...errors,
            [id]: value === '' ? true : false
        });
    };

    return (
        <Box
            className="register-page__wrapper"
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
            <Typography
                className="register-page__heading"
                variant="h4"
            >
                FitnessNotes
            </Typography>
            <form
                className="register-page__form"
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            variant="outlined"
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="confirm-password"
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            variant="outlined"
                        />
                    </Grid>
                    {isMobile ?
                        (<>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="birthday"
                                    label="Birthday"
                                    type="date"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    fullWidth
                                    id="height"
                                    label="Height"
                                    type="number"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    fullWidth
                                    id="weight"
                                    label="Weight"
                                    type="number"
                                    variant="outlined"
                                />
                            </Grid>
                        </>)
                        :
                        (<>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="birthday"
                                    label="Birthday"
                                    type="date"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="height"
                                    label="Height"
                                    type="number"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="weight"
                                    label="Weight"
                                    type="number"
                                    variant="outlined"
                                />
                            </Grid>
                        </>)
                    }
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="phone"
                            label="Phone"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </form>
            <Button
                variant="outlined"
                className="custom-button register-page__sign-in-button"
                sx={{ ":hover": { color: "#fb8c00" }, marginBottom: "10px" }}
            >
                Sign In
            </Button>
            <Typography variant="body1">
                Already have an account?{" "}
                <Link className="register-page__sign-in-link" to="/signin">Sign in</Link>
            </Typography>
        </Box>
    );
}
