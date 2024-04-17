import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { MenuItem, TextField } from '@mui/material';

const WorkoutExerciseItem = () => {
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(1);

    const handleSetsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (value >= 1 && value <= 20) {
            setSets(value);
        }
    };

    const handleRepsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (value >= 1 && value <= 100) {
            setReps(value);
        }
    };

    return (
        <div>
            {/* Dropdown Select */}
            <TextField
                select
                label="Exercise"
                variant="outlined"
                fullWidth
            // Add options as needed
            >
                {/* Add options as MenuItem components */}
                <MenuItem value="exercise1">Exercise 1</MenuItem>
                <MenuItem value="exercise2">Exercise 2</MenuItem>
                <MenuItem value="exercise3">Exercise 3</MenuItem>
            </TextField>

            {/* Sets Field */}
            <TextField
                label="Sets"
                type="number"
                variant="outlined"
                fullWidth
                value={sets}
                onChange={handleSetsChange}
                inputProps={{ min: 1, max: 20 }}
            />

            {/* Reps Field */}
            <TextField
                label="Reps"
                type="number"
                variant="outlined"
                fullWidth
                value={reps}
                onChange={handleRepsChange}
                inputProps={{ min: 1, max: 100 }}
            />
        </div>
    );
};

export default WorkoutExerciseItem;
