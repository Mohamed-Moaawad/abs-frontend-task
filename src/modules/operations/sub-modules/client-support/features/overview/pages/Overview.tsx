import { useQuery } from "@tanstack/react-query";
import AddNewUserFrom from "../../../../../../../components/forms/AddNewUserForm";
import CustomTable from "../../../../../../../components/ui/CustomTable";
import type { User } from "../types/user.types";
import { getUsers } from "../services/users.service";

const Overview = () => {
    const { data: users = [], isLoading, isError, } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    return (
        <div className="bg-[#F8FAFC80]  p-6">
            <div className="flex flex-wrap">
                <div className="w-full md:w-8/12 p-4">
                    <CustomTable
                        users={users}
                        isLoading={isLoading}
                        isError={isError}
                    />
                </div>
                <div className="w-full md:w-4/12 p-4">
                    <AddNewUserFrom />
                </div>
            </div>
        </div>
    );
};

export default Overview;