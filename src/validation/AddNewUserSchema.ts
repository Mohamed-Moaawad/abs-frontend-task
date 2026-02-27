import { z } from "zod";
const AddNewUserSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" }) // لازم الاسم موجود
        .max(100, { message: "Name is too long" }), // اختيارياً
    email: z
        .string()
        .email({ message: "Invalid email format" }) // تحقق من صيغة الايميل
        .min(1, { message: "Email is required" }), // لازم الايميل موجود
    roleId: z.string().min(1, "Role is required")
});

type AddNewUserType = z.infer<typeof AddNewUserSchema>
export { AddNewUserSchema, type AddNewUserType }