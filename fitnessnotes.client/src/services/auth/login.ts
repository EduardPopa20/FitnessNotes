import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";

export const login = async (email: string, password: string): Promise<{ error: boolean, message: string }> => {
    try {
        const response = await axios.post(`https://localhost:7201/api/auth/login`, { email, password });

        if (response.status === 200) {
            const result = jwtDecode(response.data.token) as any;

            localStorage.setItem("token", response.data.token)

            localStorage.setItem("user", JSON.stringify(result));

            return { error: false, message: "" };
        }
        else {
            return { error: true, message: response.data };
        }
    } catch (error) {

        // !!!
        if (axios.isAxiosError(error)) {
            return { error: true, message: "Network Error" };
        } else {
            return { error: true, message: "Network Error" };
        }
    }
};