import axios from "axios";
import type { Role } from "../types/role.types";

interface RolesApiResponse {
    success: boolean;
    data: Role[];
    count: number;
}

const API_URL = "https://frontend-task-backend.vercel.app/api";

export const getRoles = async (): Promise<Role[]> => {
    const { data } = await axios.get<RolesApiResponse>(
        `${API_URL}/roles`
    );
    console.log(data)
    return data.data;
};