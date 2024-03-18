import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { Box, IconButton } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import ModularTable from "../../components/NomenclatorTable/ModularTable";
import CreateNomenclatorCard from "../../components/CreateNomenclatorCard/CreateNomenclatorCard";

import TableEntry from "../../utils/interfaces/TableEntry";
import nomenclatorTitles from "../../utils/constants/nomenclatorTitles";
import nomenclatorServices from "../../services/adminNomenclators/nomenclatorServices";

interface CustomNomenclatorPageProps {
    name: string
}

const CustomNomenclatorPage = (props: CustomNomenclatorPageProps) => {
    const { name } = props;


    console.log("Component name is " + name);

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState<string>(location.pathname);

    const [tableData, setTableData] = useState<TableEntry[]>([]);

    const [title, setTitle] = useState<string>(nomenclatorTitles[name]);

    const [isOldData, setIsOldData] = useState<boolean>(false);

    const [isCreating, setIsCreating] = useState<boolean>(false);

    useEffect(() => {
        (
            async () => {
                const response = await nomenclatorServices.fetchItems(name)
                setTableData(response?.data)
            }
        )();
    }, [])

    // useEffect(() => {
    //     (async () => {
    //         const response = await defaultExercisesServices.fetchDefaultExercises();
    //         setDefaultExercises(response?.data);
    //     })()
    // }, [isOldData])

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "100%",
                height: "100%"
            }}
        >
            {!isCreating ?
                (
                    <>
                        <ModularTable entries={tableData} />
                        <IconButton
                            className="custom-button"
                            sx={{ width: "fit-content" }}
                            onClick={() => setIsCreating(true)}
                        >
                            <AddOutlinedIcon />
                        </IconButton>
                    </>
                )
                :
                <CreateNomenclatorCard
                    title={title}
                    onSave={() => nomenclatorServices.createItem}
                    setIsOldData={setIsOldData}
                />
            }
        </Box>
    );
}

export default CustomNomenclatorPage;