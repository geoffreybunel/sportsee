function NutrientCard({icon, name, color, value, unit}) {
    return (
        <div className="bg-[#FBFBFB] flex items-center gap-3.5 p-5 h-auto">
            <div className="w-15 h-15 flex justify-center items-center rounded-md" style={{ backgroundColor: `${color}33` }}>
                <img src={`../../src//assets/${icon}-icon.png`} alt={`${icon} icon`} />
            </div>

            <div className="flex flex-col">
                <span className="text-xl font-bold text-[#282D30]">{value}{unit}</span>
                <span className="text-sm font-medium text-[#74798C]">{name}</span>
            </div>
        </div>
    )
}
export default NutrientCard