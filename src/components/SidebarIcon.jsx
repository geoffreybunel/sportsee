function SidebarIcon({icon}) {
    return (
        <div className="w-16 h-16 bg-[#FFFFFF] rounded-md flex justify-center items-center">
            <img src={`../../src//assets/${icon}-icon.png`} alt={`${icon} icon`} />
        </div>
    )
}
export default SidebarIcon