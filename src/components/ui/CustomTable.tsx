import { Button, getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react'
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: "Active" | "Inactive" | "Error" | "Pending";
}
const CustomTable = () => {
    const users: User[] = [
        {
            id: "#USR-1024",
            name: "Alex Rivera",
            email: "alex@abs.ai",
            role: "Admin",
            status: "Active",
        },
        {
            id: "#USR-1025",
            name: "Jordan Smith",
            email: "jordan@abs.ai",
            role: "Editor",
            status: "Inactive",
        },
        {
            id: "#USR-PENDING",
            name: "Incomplete registration",
            email: "Invalid email Format detected",
            role: "Undefined",
            status: "Error",
        },
    ];

    const columns = [
        { key: "id", label: "USER ID" },
        { key: "details", label: "USER DETAILS" },
        { key: "role", label: "ROLE" },
        { key: "status", label: "STATUS" },
        { key: "actions", label: "ACTIONS" },
    ];



    const getKeyValue = (row: User, key: string) => {
        switch (key) {
            case "id":
                return row.id;
            case "details":
                return (
                    <>
                        <div>{row.name}</div>
                        <div style={{ fontSize: "12px", color: "#888" }}>{row.email}</div>
                    </>
                );
            case "role":
                return row.role;
            case "status":
                return row.status === "Active" ? <span style={{ color: "green" }}>Active</span>
                    : row.status === "Inactive" ? <span style={{ color: "#888" }}>Inactive</span>
                        : <span style={{ color: "red" }}>ERROR</span>;
            case "actions":
                return (
                    <div style={{ display: "flex", gap: "8px" }}>
                        <Button isIconOnly startContent={<MdOutlineEdit />} />
                        <Button isIconOnly startContent={<RiDeleteBin6Line />} />
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader>
                {columns.map((column) =>
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody>
                {users.map((row) =>
                    <TableRow key={row.id}>
                        {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default CustomTable;