export interface User {
    _id: string;
    name: string;
    email: string;
    roleId: number;
}

export interface CreateUserPayload {
    name: string;
    email: string;
    roleId: number;
}