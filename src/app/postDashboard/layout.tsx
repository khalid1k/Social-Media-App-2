import { LayoutProps } from "../../../.next/types/app/layout";
import NavMenu from "./components/nav";

export default function Layout({ children }: any) {
    return (
        <div className="mainDashboard bg-gray-800 grid grid-cols-2">
            <div className="nav sm:w-60 md:w-80 lg:w-96 bg-slate-300 ">
                <NavMenu />
            </div>
            <div className="content">
                <main>{children}</main>
            </div>
        </div>
    );
}
