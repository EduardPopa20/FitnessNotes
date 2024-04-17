import axios from "axios";

const fetchItems = async (name: string) => {
    try {
        const response = await axios.get(`https://localhost:7201/api/${name}`, {
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            }
        });

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

const deleteItem = async (name: number) => {
    try {
        const response = await axios.delete(
            `https://localhost:7201/api/${name}`
        )

        return response;
    }
    catch {
        console.log("eroare");
    };
}

export default { createItem, fetchItems, deleteItem }