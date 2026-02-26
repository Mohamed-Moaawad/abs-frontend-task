import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Overview from "../modules/operations/sub-modules/client-support/features/overview/pages/Overview";

const Layout = () => {
    return (
        <>
            <main className="flex flex-wrap">
                <div className="w-full md:w-2/12">
                    <Sidebar />
                </div>
                <div className="w-full md:w-10/12">
                    {/* Header */}
                    <Header />
                    <Overview />
                </div>
            </main>
        </>
    );
};

export default Layout;