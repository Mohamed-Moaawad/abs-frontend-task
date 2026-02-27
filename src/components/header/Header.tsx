import { FiPlus } from "react-icons/fi"
import { IoSearchOutline } from "react-icons/io5"
import CustomButton from "../ui/CustomButton"

const Header = () => {
    return (
        <div className="flex flex-wrap items-center justify-between w-full bg-white border-b border-gray-100 p-6 ">
            {/* Left Section */}
            <div className="mb-2">
                {/* Breadcrumb */}
                <p className="text-sm text-gray-400 mb-1">
                    Operations &gt; Client Support &gt; Overview
                </p>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800">
                    Users Overview
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-500 mt-1">
                    Manage enterprise access and security permissions.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 mb-2">
                {/* Search */}
                <div className="relative">
                    <IoSearchOutline
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="pl-9 pr-4 py-2 w-64 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                </div>

                {/* Add User Button */}
                <CustomButton
                    type="button"
                    text="Add User"
                    icon={<FiPlus />}
                    color="primary"
                    onPress={() => { console.log('btn clicked') }}
                />
            </div>
        </div>
    )
}

export default Header;