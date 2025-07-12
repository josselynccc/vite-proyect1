import { Link } from "react-router-dom"
import type { Country } from "../../../application/types/Country"

const Banner = (
    {
        name,
        capital,
        flags
    }: Country) => {
        return (
            <div className="w-[100%] h-[81vh] flex">
                <div className="w-[80%] h-full">
                    <img
                    className="w-full h-full object-cover"
                    src={flags.png}
                    alt={`Bandera de ${name.official}`}
                    />
                </div>

                <div className="w-[60%] h-full relative ml-[-10%]">
                    <div 
                    className="absolute inset-0 bg-sky-950 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"
                    />
                    <div className="relative h-full flex flex-col justify-center items-center p-4">
                    <h3 className="text-xl font-bold mb-2 text-center text-white">{name.official}</h3>
                    <p className="text-sm mb-4 text-white/90">{capital?.[0] || "No definida"}</p>
                    <Link 
                        className="text-cyan-400 bg-blue-900/80 hover:bg-blue-900 text-sm px-4 py-2 rounded transition-colors"
                        to={`/country-detail/${name.common}`}
                    >
                        VER DETALLE
                    </Link>
                    </div>
                </div>
                </div>
        )
}

export default Banner