import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

import FoodInfo from '../../utils/interfaces/FoodInfo';

const FoodCard = ({ foodInfo }: { foodInfo: FoodInfo }) => {
    return (
        <Card>
            <CardContent>
                <Box display="flex" justifyContent="center">
                    <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={foodInfo.calories} size={100} />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography variant="h6" component="div" color="textSecondary">
                                {`${foodInfo.name}%`}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Typography variant="h5" align="center" gutterBottom>
                    Nutrition Information
                </Typography>
                <Typography variant="body1" align="center">
                    Protein: <span style={{ color: '#4CAF50' }}>{foodInfo.proteins}g</span>
                </Typography>
                <Typography variant="body1" align="center">
                    Fats: <span style={{ color: '#FF5722' }}>{foodInfo.fats}g</span>
                </Typography>
                <Typography variant="body1" align="center">
                    Carbs: <span style={{ color: '#2196F3' }}>{foodInfo.carbohydrates}g</span>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FoodCard;
