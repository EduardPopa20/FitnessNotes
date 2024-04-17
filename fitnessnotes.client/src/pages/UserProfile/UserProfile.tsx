import { useContext, useEffect, useState } from 'react';
import { Box, Card, CardContent, CircularProgress, Grid, IconButton, TextField, Typography, useMediaQuery } from '@mui/material';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { AuthSessionContext } from "../../layouts/AuthLayout";

import { getUserData } from '../../services/user/user';

import { UserProfileInterface } from '../../utils/interfaces/UserProfile';

import "./UserProfile.scss"

const UserProfile = () => {
    const [userData, setUserData] = useState<UserProfileInterface>();

    const [isEditing, setIsEditing] = useState(false);

    const user = useContext(AuthSessionContext);

    const [newHeight, setNewHeight] = useState<string>();
    const [newWeight, setNewWeight] = useState<string>();
    const [newNickname, setNewNickname] = useState<string>();

    const isMobile = useMediaQuery('(max-width:576px)');

    useEffect(() => {
        if (user.email) {
            (async () => {
                const response = await getUserData(user.email);
                if (response)
                    setUserData(response?.data);
                setNewHeight(response?.data.height);
                setNewWeight(response?.data.weight);
                setNewNickname(response?.data.username);
            })()
        }
    }, [user.email]);

    const handleEditProfile = () => {

    }

    return (
        <>
            {userData ?
                (
                    <Box className="user-profile">
                        <Card raised className="card-container">
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {userData.username}'s Profile
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={isMobile ? 12 : 9}>
                                        <TextField
                                            label="Email"
                                            value={userData.email}
                                            fullWidth
                                            InputProps={{ readOnly: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={isMobile ? 12 : 3}>
                                        <TextField
                                            label="Birthday"
                                            value={userData.birthday}
                                            fullWidth
                                            InputProps={{ readOnly: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={isMobile ? 12 : 6}>
                                        <TextField
                                            label="City"
                                            value={userData.city}
                                            fullWidth
                                            InputProps={{ readOnly: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={isMobile ? 12 : 6}>
                                        <TextField
                                            label="Country"
                                            value={userData.country}
                                            fullWidth
                                            InputProps={{ readOnly: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={!isEditing}
                                            label="Weight (kg)"
                                            value={newWeight}
                                            fullWidth
                                            InputProps={{ readOnly: !isEditing }}
                                            onChange={(e) => setNewWeight(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={!isEditing}
                                            label="Height (cm)"
                                            value={newHeight}
                                            fullWidth
                                            InputProps={{ readOnly: !isEditing }}
                                            onChange={(e) => setNewHeight(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            disabled={!isEditing}
                                            label="Nickname"
                                            value={newNickname}
                                            fullWidth
                                            InputProps={{ readOnly: !isEditing }}
                                            onChange={(e) => setNewNickname(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                        <Box className="user-profile__actions">
                            {!isEditing ?
                                (
                                    <IconButton
                                        className='user-profile__action--edit'
                                        aria-label="edit-profile"
                                        onClick={() => setIsEditing(true)}
                                    >
                                        <EditOutlinedIcon />
                                    </IconButton>
                                )
                                :
                                (
                                    <>
                                        <IconButton
                                            className='user-profile__action--check'
                                            aria-label="check-profile"
                                            onClick={handleEditProfile}
                                        >
                                            <CheckOutlinedIcon />
                                        </IconButton>
                                        <IconButton
                                            className='user-profile__action--close'
                                            aria-label="close-profile"
                                            onClick={() => setIsEditing(false)}
                                        >
                                            <CloseOutlinedIcon />
                                        </IconButton>
                                    </>
                                )
                            }
                        </Box>
                    </Box>
                )
                :
                <CircularProgress />
            }
        </>
    )
};

export default UserProfile;
