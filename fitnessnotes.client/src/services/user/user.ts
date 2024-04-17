import axios from "axios";

export const getUserData = async (email: string) => {
    try {
        const response = await axios.post(
            `https://localhost:7201/api/user`,
            email,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return response;
    }
    catch {
        console.log("eroare");
    }
}