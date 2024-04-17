import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';

import FirstWorkoutImage from "../../assets/training/firstExerciseImage.svg";
import SecondWorkoutImage from "../../assets/training/secondExerciseImage.svg";
import ThirdWorkoutImage from "../../assets/training/thirdExerciseImage.svg";
import FourthWorkoutImage from "../../assets/training/fourthExerciseImage.svg";
import FifthWorkoutImage from "../../assets/training/fifthExerciseImage.svg";

import './Training.scss';

const Training = () => {

    return (
        <div className="training-container">
            <Box className="training-container__info-container">
            </Box>
            <Box className="training-container__menu">
                <Box className="training-container__section training-container__section--workouts">
                    <Typography>Manage your workouts</Typography>
                    <Link to="/workouts" className="link">https://localhost:5173/register
                        <Button className="training-container__rounded-square training-container__rounded-square--workouts">
                            <Grid container spacing={2}>
                                <Grid className="training-container__grid" item xs={6}>
                                    <img src={FirstWorkoutImage} alt="Workout" />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={SecondWorkoutImage} alt="Workout" />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={ThirdWorkoutImage} alt="Workout" />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={FourthWorkoutImage} alt="Workout" />
                                </Grid>
                            </Grid>
                        </Button>
                    </Link>
                </Box>
                <Typography className="training-container__or">OR</Typography>
                <Box className="training-container__section training-container__section--exercises">
                    <Typography>Manage your exercises</Typography>
                    <Link to="/exercises" className="link">
                        <Button className="training-container__rounded-square training-container__rounded-square--exercises">
                            <img src={FifthWorkoutImage} alt="Workout" />
                        </Button>
                    </Link>
                </Box>
            </Box>
        </div >
    );
};

export default Training;
