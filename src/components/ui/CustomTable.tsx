import { Button, Pagination, Skeleton, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react'
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import type { User } from '../../modules/operations/sub-modules/client-support/features/overview/types/user.types';
import { useMemo, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../modules/operations/sub-modules/client-support/features/overview/services/users.service';

interface UsersTableProps {
    users: User[];
    isLoading: boolean;
    isError: boolean;
}

const ROWS_PER_PAGE = 5;

const CustomTable = ({ users, isLoading, isError }: UsersTableProps) => {
    const [page, setPage] = useState(1);
    const pages = Math.ceil(users.length / ROWS_PER_PAGE);
    const paginatedUsers = useMemo(() => {
        const start = (page - 1) * ROWS_PER_PAGE;
        const end = start + ROWS_PER_PAGE;
        return users.slice(start, end);
    }, [page, users]);

    const columns = [
        { key: "id", label: "USER ID" },
        { key: "details", label: "USER DETAILS" },
        { key: "role", label: "ROLE" },
        { key: "actions", label: "ACTIONS" },
    ];

    const queryClient = useQueryClient();

    const { mutate: handleDelete } = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });



    if (isLoading) {
        return (
            <Table aria-label="Loading table">
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    {[...Array(5)].map((_, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Skeleton className="h-4 w-32 rounded-lg" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-40 rounded-lg" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-24 rounded-lg" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-20 rounded-lg" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
    if (isError) return <p>Error loading users</p>;
    if (!users.length) return <p>No users found</p>;

    return (
        <div className='w-full'>
            <Table aria-label="Example table with dynamic content">
                <TableHeader>
                    {columns.map((column) =>
                        <TableColumn key={column.key}>{column.label}</TableColumn>
                    )}
                </TableHeader>
                <TableBody>
                    {paginatedUsers.map((user) => (
                        <TableRow key={user._id}>
                            <TableCell>#{user._id}</TableCell>

                            <TableCell>
                                <div>{user.name}</div>
                                <div className="text-xs text-gray-400">{user.email}</div>
                            </TableCell>

                            <TableCell>
                                {user.roleId === 1 && (
                                    <span className="bg-gray-200 py-1 px-3 rounded-sm font-medium">Admin</span>
                                )}

                                {user.roleId === 2 && (
                                    <span className="bg-gray-200 py-1 px-3 rounded-sm font-medium">Editor</span>
                                )}

                                {user.roleId === 3 && (
                                    <span className="bg-gray-200 py-1 px-3 rounded-sm font-medium">moderator</span>
                                )}
                            </TableCell>

                            <TableCell>
                                <div className="flex gap-2">
                                    <Button isIconOnly size="sm">
                                        <MdOutlineEdit />
                                    </Button>
                                    <Button isIconOnly size="sm" color="danger"
                                        onPress={() => handleDelete(user._id)}>
                                        <RiDeleteBin6Line />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {pages > 1 && (
                <div className="flex justify-end mt-4">
                    <Pagination
                        total={pages}
                        page={page}
                        onChange={setPage}
                        showControls
                    />
                </div>
            )}
        </div>
    )
}

export default CustomTable;