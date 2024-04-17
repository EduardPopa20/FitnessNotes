import axios from "axios";

import RegisterFormData from "../../utils/interfaces/Register";

export const register = async (userData: RegisterFormData) => {
    try {
        const response = await axios.post(`https://localhost:7201/api/Auth/register`, userData);
        if (response.status === 200) {
            console.log('Registration successful');
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};