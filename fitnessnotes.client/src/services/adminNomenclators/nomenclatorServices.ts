import axios from "axios";

const fetchItems = async (name: string) => {
    try {
        console.log("Service name is " + name);
        const response = await axios.get(`https://localhost:7201/api/${name}`);

        return response;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};

const createItem = async (name: string) => {
    try {
        const response = await axios.post(
            `https://localhost:7201/api/${name}`,
            {
                name
            }
        )

        return response;
    }
    catch {
        console.log("eroare");
    };
}

export default { createItem, fetchItems }