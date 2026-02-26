import AddNewUserFrom from "../../../../../../../components/forms/AddNewUserFrom";
import CustomTable from "../../../../../../../components/ui/CustomTable";

const Overview = () => {
    return (
        <div className="bg-[#F8FAFC80]  p-6">
            <div className="flex flex-wrap">
                <div className="w-full md:w-8/12 p-4">
                    <CustomTable />
                </div>
                <div className="w-full md:w-4/12 p-4">
                    <AddNewUserFrom />
                </div>
            </div>
        </div>
    );
};

export default Overview;