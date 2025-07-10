import { NavLink } from "react-router-dom"

const Menu = ()=>{
    return(
        <>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <ul className="flex flex-row content-center gap-10 text-cyan-400">
                    <li><NavLink to="/" 
                            className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-cyan-400"}>Inicio</NavLink></li>
                    <li><NavLink to="/paises"
                            className={({ isActive }) =>
                            isActive ? "text-white font-bold" : "text-cyan-400"}>Paises</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Menu