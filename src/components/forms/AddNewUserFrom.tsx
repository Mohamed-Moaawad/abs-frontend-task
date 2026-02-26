import { useForm, type SubmitHandler } from "react-hook-form";
import { AddNewUserSchema, type AddNewUserType } from "../../validation/AddNewUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdDashboard } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import type { Role } from "../../modules/operations/sub-modules/client-support/features/overview/types/role.types";
import { Input, Select } from "@heroui/react";


const AddNewUserFrom = () => {

    // useQuery بياخد key وفنكشن
    const { data: roles = [], isLoading: rolesLoading } = useQuery<Role[]>({
        queryKey: ["roles"],
        queryFn: () => axios.get("https://frontend-task-backend.vercel.app/roles").then(res => res.data),
    });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newUser: AddNewUserType) =>
            axios.post("https://frontend-task-backend.vercel.app/users", newUser),
        onSuccess: () => {
            reset(); // إعادة form
            queryClient.invalidateQueries(["users"]);
        },
    });

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<AddNewUserType>({
        mode: 'onChange',
        resolver: zodResolver(AddNewUserSchema),
    });

    const onSubmit: SubmitHandler<AddNewUserType> = (data) => {
        console.log(data)
        mutation.mutate(data);
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-6">
            {/* Add User Form */}
            <h2 className="text-lg font-semibold">Add New User</h2>
            <p className="text-sm text-gray-500">
                Quickly provision a new enterprise account.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <Input
                        {...register("name")}
                        placeholder="e.g. John Doe"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <Input
                        {...register("email")}
                        placeholder="john@abs.ai"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Role */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Security Role
                    </label>
                    <Select className="w-full" label="Select a role">
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </Select>
                    {errors.roleId && (
                        <p className="text-red-500 text-xs mt-1">{errors.roleId.message}</p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting || mutation.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md disabled:opacity-50"
                >
                    {isSubmitting || mutation.isPending ? "Creating..." : "Create User"}
                </button>
            </form>

            {/* Active Licenses */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div>
                    <p className="text-xs text-gray-500">Active Licenses</p>
                    <p className="text-lg font-semibold">124 / 150 total</p>
                </div>
                <MdDashboard />
            </div>
        </div>
    )
}

export default AddNewUserFrom