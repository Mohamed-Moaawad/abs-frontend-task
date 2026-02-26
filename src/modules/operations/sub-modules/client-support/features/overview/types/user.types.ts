export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export interface CreateUserPayload {
    name: string;
    email: string;
    roleId: number;
}