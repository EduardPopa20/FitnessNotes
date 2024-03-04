import { FocusEvent, ChangeEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MenuItem, TextField, Grid, Box, Typography, Button, IconButton, InputAdornment } from "@mui/material";
import { Cake, EmailOutlined, Height, Person, Phone, Scale, Visibility, VisibilityOff } from "@mui/icons-material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import useMediaQuery from "@mui/material/useMediaQuery";

import countries from "../../utils/constants/countries";

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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [countryCode, setCountryCode] = useState(countries[0].code);
    const [isFocused, setIsFocused] = useState(false);
    const [filter, setFilter] = useState('');

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

    const [fieldFocusStates, setFieldFocusStates] = useState<{ [key: string]: boolean }>({
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

    const handleInputFocus = (inputName: string) => {
        setFieldFocusStates({ ...fieldFocusStates, [inputName]: true });
    }

    const handleInputBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>, inputName: string) => {
        const { id, value } = e.target;
        setErrors({
            ...errors,
            [id]: value === '' ? true : false
        });
        setFieldFocusStates({ ...fieldFocusStates, [inputName]: false });
    };

    return (
        <Box
            className="register-page__wrapper"
            id="ceva"
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
                            onFocus={() => { handleInputFocus('email') }}
                            onBlur={(e) => handleInputBlur(e, 'email')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        className="register-page__input-adornment"
                                        position="start"
                                        sx={{ color: fieldFocusStates["email"] ? "#fb6200" : "" }}>
                                        <EmailOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            onChange={handleInputChange}
                            onFocus={() => { handleInputFocus('password') }}
                            onBlur={(e) => handleInputBlur(e, 'password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                    >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => { setShowPassword(!showPassword) }}
                                            onMouseDown={(e) => { e.preventDefault() }}
                                            sx={{ color: fieldFocusStates["password"] ? "#fb6200" : "" }}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="confirm-password"
                            label="Confirm Password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            variant="outlined"
                            onChange={handleInputChange}
                            onFocus={() => { handleInputFocus('confirmPassword') }}
                            onBlur={(e) => handleInputBlur(e, 'confirmPassword')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}
                                            onMouseDown={(e) => { e.preventDefault() }}
                                            sx={{ color: fieldFocusStates["confirmPassword"] ? "#fb6200" : "" }}
                                        >
                                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            variant="outlined"
                            onChange={handleInputChange}
                            onFocus={() => { handleInputFocus('username') }}
                            onBlur={(e) => handleInputBlur(e, 'username')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        className="register-page__input-adornment"
                                        position="start"
                                        sx={{ color: fieldFocusStates["username"] ? "#fb6200" : "" }}>
                                        <PersonOutlineOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    {isMobile ?
                        (<>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Birthday" sx={{ width: "100%" }} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    fullWidth
                                    id="height"
                                    label="Height (cm)"
                                    type="number"
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    onFocus={() => { handleInputFocus('height') }}
                                    onBlur={(e) => handleInputBlur(e, 'height')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment
                                                className="register-page__input-adornment"
                                                position="start"
                                                sx={{ color: fieldFocusStates["height"] ? "#fb6200" : "" }}>
                                                <HeightOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextField
                                    fullWidth
                                    id="weight"
                                    label="Weight (kg)"
                                    type="number"
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    onFocus={() => { handleInputFocus('weight') }}
                                    onBlur={(e) => handleInputBlur(e, 'weight')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment
                                                className="register-page__input-adornment"
                                                position="start"
                                                sx={{ color: fieldFocusStates["weight"] ? "#fb6200" : "" }}>
                                                <ScaleOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </>)
                        :
                        (<>
                            <Grid item xs={12} md={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Birthday" sx={{ width: "100%" }} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="height"
                                    label="Height"
                                    type="number"
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    onFocus={() => { handleInputFocus('height') }}
                                    onBlur={(e) => handleInputBlur(e, 'height')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment
                                                className="register-page__input-adornment"
                                                position="start"
                                                sx={{ color: fieldFocusStates["height"] ? "#fb6200" : "" }}>
                                                <HeightOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="weight"
                                    label="Weight"
                                    type="number"
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    onFocus={() => { handleInputFocus('weight') }}
                                    onBlur={(e) => handleInputBlur(e, 'weight')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment
                                                className="register-page__input-adornment"
                                                position="start"
                                                sx={{ color: fieldFocusStates["weight"] ? "#fb6200" : "" }}>
                                                <ScaleOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </>)
                    }
                    <Grid item xs={12}>
                        <Box sx={{ width: "100%", display: "flex", gap: "20px" }}>
                            <TextField
                                sx={{ width: "30%" }}
                                select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                variant="outlined"
                                id="country-code"
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.code} value={country.code}>
                                        {`+${country.phone} (${country.name})`}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id="phone"
                                label="Phone"
                                variant="outlined"
                                onChange={handleInputChange}
                                onFocus={() => { handleInputFocus('phone') }}
                                onBlur={(e) => handleInputBlur(e, 'phone')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            className="register-page__adornment"
                                            position="start"
                                            sx={{ color: fieldFocusStates['phone'] ? "#fb6200" : "" }}>
                                            <PhoneOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ width: "70%" }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </form>
            <Button
                variant="outlined"
                className="custom-button register-page__sign-in-button"
                sx={{ ":hover": { color: "#fb6200" } }}
            >
                Sign In
            </Button>
            <Typography variant="body1">
                Already have an account?{" "}
                <Link className="custom-link register-page__sign-in-link" to="/login">Sign in</Link>
            </Typography>
        </Box >
    );
}
