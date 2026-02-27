import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { MdDashboard } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Role } from "../../modules/operations/sub-modules/client-support/features/overview/types/role.types";
import { Input, Select, SelectItem } from "@heroui/react";
import CustomButton from "../ui/CustomButton";
import { getRoles } from "../../modules/operations/sub-modules/client-support/features/overview/services/roles.service";
import { createUser } from "../../modules/operations/sub-modules/client-support/features/overview/services/users.service";
import { AddNewUserSchema, type AddNewUserType } from "../../validation/AddNewUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";


const AddNewUserForm = () => {
    const queryClient = useQueryClient();

    const { data: roles = [] } = useQuery<Role[]>({
        queryKey: ["roles"],
        queryFn: getRoles,
    });


    const { mutate, isPending } = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            reset();
        },
    });

    const { register, handleSubmit, reset, control, formState: { errors, isSubmitting }, } = useForm<AddNewUserType>({
        mode: 'onChange',
        resolver: zodResolver(AddNewUserSchema),
    });

    const onSubmit: SubmitHandler<AddNewUserType> = (data) => {
        console.log("Payload:", data, 'roleId', data.roleId);
        mutate({
            ...data,
            roleId: Number(data.roleId),
        });
        reset();
    };


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
                    <Input
                        label="Full Name"
                        placeholder="e.g. John Doe"
                        {...register("name")}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                {/* Email */}
                <div>
                    <Input
                        label=" Email Address"
                        placeholder="john@abs.ai"
                        {...register("email")}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />

                </div>

                {/* Role */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Security Role
                    </label>
                    <Controller
                        control={control}
                        name="roleId"
                        render={({ field }) => (
                            <Select
                                className="w-full"
                                label="Select a role"
                                selectedKeys={field.value ? new Set([String(field.value)]) : new Set()}
                                onSelectionChange={(keys) => {
                                    const value = Array.from(keys)[0];
                                    field.onChange(value);
                                }}
                                isInvalid={!!errors.roleId}
                                errorMessage={errors.roleId?.message}
                            >
                                {roles.map((role) => (
                                    <SelectItem key={String(role.roleId)}>
                                        {role.name}
                                    </SelectItem>
                                ))}
                            </Select>
                        )}
                    />
                </div>

                {/* Submit */}
                <div className="w-full">
                    <CustomButton
                        type="submit"
                        text={isSubmitting || isPending ? "Creating..." : "Create User"}
                        color="primary"
                        isDisabled={isSubmitting || isPending}
                    />
                </div>
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
    );
};

export default AddNewUserForm;