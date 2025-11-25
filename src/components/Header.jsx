function Header() {
    return (
        <header className="flex bg-[#020203] text-[#FFFFFF]">
            <img src="../src/assets/logo.png" alt="Logo SportSee" className="my-5 mx-7"/>
            <nav className="w-full content-center"> 
                <ul className="flex justify-around text-2xl">
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header