function Hero({name}) {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-medium">
                Bonjour 
                <span className="text-[#FF0101]"> {name}</span>
            </h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    )
}
export default Hero