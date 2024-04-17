import { FocusEvent, ChangeEvent, useState, useEffect, SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";

import dayjs, { Dayjs } from 'dayjs';

import isValidPhoneNumber, { isPossiblePhoneNumber, isValidNumberForRegion } from 'libphonenumber-js'

import { MenuItem, TextField, Grid, Box, Typography, Button, IconButton, InputAdornment, Backdrop, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';

import useMediaQuery from "@mui/material/useMediaQuery";

import countries from "../../utils/constants/countries";
import {
    isRequiredField,
    isValidEmail,
    isSamePassword,
    hasAtLeast8Characters,
    hasAtLeastOneDigit,
    hasAtLeastOneLowercase,
    hasAtLeastOneSpecial,
    hasAtLeastOneUppercase,
    hasAtMost20Characters,
    isValidHeight
} from "../../utils/validations/auth";

import { register } from "../../services/auth/register";

import "./Register.scss";
import ErrorDisplayer from "../../components/ErrorDisplayer/ErrorDisplayer";
import { fetchCities } from "../../services/cities";
import RegisterFormData from "../../utils/interfaces/Register";

export default function FormWithMaterialUI() {
    const isMobile = useMediaQuery('(max-width:768px)');

    const [loadingState, setLoadingState] = useState<boolean>(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [birthday, setBirthday] = useState<Dayjs | null>(dayjs());
    const [countryCode, setCountryCode] = useState(countries[0].code);
    const [isFocused, setIsFocused] = useState(false);
    const [filter, setFilter] = useState('');
    const [cities, setCities] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState(countries[0].name);
    const [city, setCity] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [phone, setPhone] = useState('');

    const [focusedField, setFocusedField] = useState('');

    const [emailErrors, setEmailErrors] = useState<string[]>([]);
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState<string[]>([]);
    const [usernameErrors, setUsernameErrors] = useState<string[]>([]);
    const [countryErrors, setCountryErrors] = useState<string[]>([]);
    const [cityErrors, setCityErrors] = useState<string[]>([]);
    const [heightErrors, setHeightErrors] = useState<string[]>([]);
    const [weightErrors, setWeightErrors] = useState<string[]>([]);
    const [phoneErrors, setPhoneErrors] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            setLoadingState(true);
            if (country) {
                const cities = await fetchCities(country);
                if (cities) {
                    setCities(cities);
                }
            }
        })();
    }, [country])

    useEffect(() => {
        if (cities.length > 0) {
            setCity(cities[0]);
        }
        setLoadingState(false);
    }, [cities]);

    const validateField = (value: any, validations: ((value: any, toBeComparedValue?: any) => string)[]): string[] => {
        const errorMessages: string[] = [];

        for (const validation of validations) {
            let currentErrorMessage;
            if (validation.name == "isSamePassword") {
                currentErrorMessage = validation(password, value)
            }
            else {
                currentErrorMessage = validation(value);
            }
            if (currentErrorMessage) {
                errorMessages.push(currentErrorMessage);
            }
        }

        return errorMessages;
    };

    const handleInputBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>, ceva: any) => {
        setFocusedField("");
    };

    const handleFormSubmit = () => {
        const newAccount: RegisterFormData = {
            email,
            password,
            confirmPassword,
            username,
            country,
            city,
            height: parseFloat(height),
            weight: parseFloat(weight),
            phone,
            birthday: birthday?.format("YYYY-MM-DD")
        };

        register(newAccount)
    }

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        validations: ((value: any, secondaryValue?: any) => string)[],
        valueSetter: Dispatch<SetStateAction<string>>,
        errorSetter: Dispatch<SetStateAction<string[]>>
    ) => {
        errorSetter([])

        const errorMessages = validateField(e.target.value, validations);

        errorSetter(errorMessages)

        valueSetter(e.target.value)
    }

    return (
        <Box
            className="register-page__wrapper"
        >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loadingState}
            >
                <CircularProgress color="inherit" sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }} />
            </Backdrop>
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
                            onChange={(e) => handleInputChange(e, [isRequiredField, isValidEmail], setEmail, setEmailErrors)}
                            onFocus={() => { setFocusedField('email') }}
                            onBlur={(e) => handleInputBlur(e, 'email')}
                            helperText={<ErrorDisplayer errors={emailErrors} />}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        className="register-page__input-adornment"
                                        position="start"
                                        sx={{ color: focusedField == "email" ? "#fb6200" : "" }}>
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
                            onChange={(e) => handleInputChange(
                                e,
                                [
                                    isRequiredField,
                                    hasAtLeast8Characters,
                                    hasAtMost20Characters,
                                    hasAtLeastOneUppercase,
                                    hasAtLeastOneLowercase,
                                    hasAtLeastOneDigit,
                                    hasAtLeastOneSpecial
                                ],
                                setPassword,
                                setPasswordErrors
                            )}
                            onFocus={() => { setFocusedField('password') }}
                            onBlur={(e) => handleInputBlur(e, 'password')}
                            helperText={passwordErrors ?
                                (passwordErrors.map((error, index) => (
                                    <span key={index}>{error}<br /></span>
                                )))
                                :
                                ""
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                    >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => { setShowPassword(!showPassword) }}
                                            onMouseDown={(e) => { e.preventDefault() }}
                                            sx={{ color: focusedField == "password" ? "#fb6200" : "" }}
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
                            id="confirmPassword"
                            label="Confirm Password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            variant="outlined"
                            onChange={(e) => handleInputChange(
                                e,
                                [
                                    isRequiredField,
                                    isSamePassword
                                ],
                                setConfirmPassword,
                                setConfirmPasswordErrors
                            )}
                            onFocus={() => { setFocusedField('confirmPassword') }}
                            onBlur={(e) => handleInputBlur(e, 'confirmPassword')}
                            helperText={confirmPasswordErrors ? confirmPasswordErrors : ""}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}
                                            onMouseDown={(e) => { e.preventDefault() }}
                                            sx={{ color: focusedField == "confirmPassword" ? "#fb6200" : "" }}
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
                            onChange={(e) => handleInputChange(
                                e,
                                [
                                    isRequiredField,
                                ],
                                setUsername,
                                setUsernameErrors
                            )}
                            onFocus={() => { setFocusedField('username') }}
                            onBlur={(e) => handleInputBlur(e, 'username')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        className="register-page__input-adornment"
                                        position="start"
                                        sx={{ color: focusedField == "username" ? "#fb6200" : "" }}>
                                        <PersonOutlineOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid >
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            fullWidth
                            select
                            id="country"
                            label="Country"
                            variant="outlined"
                            value={country}
                            onChange={(e) => handleInputChange(
                                e,
                                [
                                    isRequiredField,
                                ],
                                setCountry,
                                setCountryErrors
                            )}
                            onFocus={() => { setFocusedField('country') }}
                            onBlur={() => setFocusedField("")}
                            SelectProps={{
                                onClose: () => {
                                    setTimeout(() => {
                                        document.getElementById("country")?.blur();
                                    }, 0);
                                },
                            }}
                            error={countryErrors.length > 0}
                            helperText={countryErrors ? countryErrors : ""}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className="register-page__input-adornment"
                                        position="start"
                                    >
                                        <PublicIcon sx={{
                                            color: focusedField == "country" ? "#fb6200" : ""
                                        }} />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            {
                                countries.map((country, index) => (
                                    <MenuItem key={index} value={country.name}>
                                        {country.name}
                                    </MenuItem>
                                ))
                            }
                        </TextField >
                    </Grid >
                    <Grid item xs={12} md={6}>
                        <TextField
                            select
                            fullWidth
                            id="city"
                            label="City"
                            variant="outlined"
                            value={city}
                            onChange={(e) => handleInputChange(
                                e,
                                [
                                    isRequiredField,
                                ],
                                setCity,
                                setCityErrors
                            )}
                            onFocus={() => { setFocusedField('city') }}
                            onBlur={() => setFocusedField("")}
                            disabled={!country}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className="register-page__input-adornment"
                                        position="start"
                                    >
                                        <LocationCityIcon sx={{
                                            color: focusedField == "city" ? "#fb6200" : ""
                                        }} />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            {/* Populate cities here */}
                            {cities.map((cityName, index) => (
                                <MenuItem key={index} value={cityName}>{cityName}</MenuItem>
                            ))}
                        </TextField>
                    </Grid >
                    {
                        isMobile ?
                            (<>
                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                value={birthday}
                                                onChange={(newDate) => { setBirthday(newDate) }}
                                                onOpen={() => { setFocusedField("birthday") }}
                                                onClose={() => setFocusedField("")}
                                                format="YYYY-MM-DD"
                                                className="register-page__datepicker"
                                                label="Birthday*"

                                            />
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
                                        onChange={(e) => handleInputChange(
                                            e,
                                            [
                                                isRequiredField,
                                            ],
                                            setHeight,
                                            setHeightErrors
                                        )}
                                        onFocus={() => { setFocusedField('height') }}
                                        onBlur={(e) => handleInputBlur(e, 'height')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment
                                                    className="register-page__input-adornment"
                                                    position="start"
                                                    sx={{ color: focusedField == "height" ? "#fb6200" : "" }}>
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
                                        onChange={(e) => setWeight(e.target.value)}
                                        onFocus={() => { setFocusedField('weight') }}
                                        onBlur={(e) => handleInputBlur(e, 'weight')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment
                                                    className="register-page__input-adornment"
                                                    position="start"
                                                    sx={{ color: focusedField == "weight" ? "#fb6200" : "" }}>
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
                                            <DatePicker
                                                value={birthday}
                                                onChange={(newDate) => {
                                                    setBirthday(newDate)
                                                }}
                                                format="YYYY-MM-DD"
                                                className="register-page__datepicker"
                                                label="Birthday*"
                                                sx={{ width: "100%" }} />
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
                                        onChange={(e) => handleInputChange(
                                            e,
                                            [
                                                isValidHeight,
                                            ],
                                            setHeight,
                                            setHeightErrors
                                        )}
                                        helperText={heightErrors[0]}
                                        onFocus={() => { setFocusedField('height') }}
                                        onBlur={(e) => handleInputBlur(e, 'height')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment
                                                    className="register-page__input-adornment"
                                                    position="start"
                                                    sx={{ color: focusedField == "height" ? "#fb6200" : "" }}>
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
                                        onChange={(e) => setHeight(e.target.value)}
                                        onFocus={() => { setFocusedField('weight') }}
                                        onBlur={(e) => handleInputBlur(e, 'weight')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment
                                                    className="register-page__input-adornment"
                                                    position="start"
                                                    sx={{ color: focusedField == "weight" ? "#fb6200" : "" }}>
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
                                onFocus={() => setFocusedField("country-code")}
                                onBlur={() => setFocusedField("")}
                                SelectProps={{
                                    onClose: () => {
                                        setTimeout(() => {
                                            document.getElementById("country-code")?.blur();
                                        }, 0);
                                    },
                                }}
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.code} value={country.code}>
                                        <img style={{ marginRight: "20px" }} src={country.flag} alt={country.name}></img>
                                        {`+ ${country.phone} (${country.name})`}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="phone"
                                label="Phone"
                                variant="outlined"
                                onChange={(e) => setPhone(e.target.value)}
                                onFocus={() => { setFocusedField('phone') }}
                                onBlur={(e) => handleInputBlur(e, 'phone')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            className="register-page__adornment"
                                            position="start"
                                            sx={{
                                                color: focusedField == "phone" ? "#fb6200" : ""
                                            }}>
                                            <PhoneOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ width: "70%" }}
                            />
                        </Box>
                    </Grid >
                </Grid >
            </form >
            <Button
                variant="outlined"
                className="custom-button register-page__sign-in-button"
                onClick={handleFormSubmit}
                sx={{ ":hover": { color: "#fb6200" } }}
            >
                Sign Up
            </Button>
            <Typography variant="body1">
                Already have an account?{" "}
                <Link className="custom-link register-page__sign-in-link" to="/login">Sign in</Link>
            </Typography>
        </Box >
    );
}
