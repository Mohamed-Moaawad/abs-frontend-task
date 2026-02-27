import axios from "axios";
import type { CreateUserPayload, User } from "../types/user.types";


const API_URL = "https://frontend-task-backend.vercel.app/api";

interface UsersApiResponse {
    success: boolean;
    data: User[];
    count: number;
}

export const getUsers = async (): Promise<User[]> => {
    const { data } = await axios.get<UsersApiResponse>(
        `${API_URL}/users`
    );

    return data.data;
};

export const createUser = async (
    payload: CreateUserPayload
): Promise<User> => {
    const { data } = await axios.post<User>(`${API_URL}/users`, payload);
    return data;
};

export const deleteUser = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/users/${id}`);
}