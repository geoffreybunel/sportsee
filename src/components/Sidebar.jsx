import SidebarIcon from "./SidebarIcon"

function Sidebar() {
    return (
        <aside className="flex flex-col items-center justify-around bg-[#020203] text-[#FFFFFF] shadow h-screen w-[117px] shadow-lg shadow-black/25">

            <ul className="flex flex-col gap-5">
                <li>
                    <SidebarIcon icon="yoga"/>
                </li>

                <li>
                    <SidebarIcon icon="swimming"/>
                </li>

                <li>
                    <SidebarIcon icon="bike"/>
                </li>

                <li>
                    <SidebarIcon icon="weight"/>
                </li>
            </ul>

            <span className="rotate-270 whitespace-nowrap text-xs">Copyright, SportSee 2020</span>

	    </aside>
    )
}
export default Sidebar