import { ChangeEvent, useState } from 'react';

import { Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';

import CreateNomenclatorCardInterface from '../../utils/interfaces/CreateNomenclatorCard';

const CreateNomenclatorCard = (props: CreateNomenclatorCardInterface) => {
    const { title, onSave, setIsOldData } = props;

    const [name, setName] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSave = () => {
        onSave()
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Box display="flex" alignItems="center">
                    <Typography variant="body1">Add {title}</Typography>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        sx={{ ml: 2 }}
                    />
                    <Button variant="contained" onClick={handleSave} sx={{ ml: 2 }}>
                        Save
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CreateNomenclatorCard;
