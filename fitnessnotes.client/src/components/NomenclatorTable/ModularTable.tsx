import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import TableEntry from '../../utils/interfaces/TableEntry';

import "./ModularTable.scss"

interface Props {
    entries: TableEntry[]
}

const ModularTable = (props: Props) => {
    const { entries } = props;

    if (!entries || entries.length === 0) {
        return <Box sx={{ height: "100%", width: "100%" }}>No items to display</Box>;
    }

    const columns: string[] = Object.keys(entries[0]);

    return (
        <TableContainer component={Paper} sx={{ width: '100%' }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column}
                                sx={{ textAlign: "center", fontWeight: "700" }}
                            >
                                {column.charAt(0).toUpperCase() + column.slice(1)}
                            </TableCell>
                        ))}
                        <TableCell
                            key={"action-row"}
                            sx={{ textAlign: "center", fontWeight: "700" }}
                        >
                            Actions
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entry, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column}
                                    sx={{ textAlign: "center" }}
                                >
                                    {entry[column]}
                                </TableCell>
                            ))}
                            <TableCell
                                sx={{ textAlign: "center", fontWeight: "700" }}
                            >
                                <IconButton
                                    className='modular-table__edit-entry'
                                    aria-label="edit-entry"
                                >
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton
                                    className='modular-table__delete-entry'
                                    aria-label="delete-entry"
                                >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default ModularTable;
