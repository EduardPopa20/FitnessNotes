import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import axios from "axios";

import ModularTable from "../../../components/NomenclatorTable/ModularTable";
import TableEntry from "../../../utils/interfaces/TableEntry";

const Roles = () => {
    const [roles, setRoles] = useState<TableEntry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7201/api/Roles');

                console.log(response);

                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };
        fetchData();
    }, [])

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <ModularTable entries={roles} />
        </Box>
    );
}

export default Roles;