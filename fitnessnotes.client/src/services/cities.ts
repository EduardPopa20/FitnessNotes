import axios from "axios";

export const fetchCities = async (countryName: string) => {
    try {
        const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', { country: countryName });
        const data = response.data;
        if (data.error === false) {
            return data.data
        } else {
            console.error("Failed to fetch cities:", data.msg);
        }
    } catch (error) {
        console.error("Error fetching cities:", error);
    }
};