import { Link } from "react-router-dom";
import type { Country} from "../../../application/types/Country";

const card = (
    {
        name,
        capital,
        region,
        subregion,
        flags
    }: Country) => {
        return (
            <article className=" flex flex-col justify-between bg-white text-black rounded-lg shadow-md overflow-hidden w-auto hover:scale-105 transition-transform duration-300">
                <img
                    className="w-full h-48 object-cover"
                    src={flags.png}
                    alt={`Bandera de ${name.official}`}
                />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-center">{name.official}</h3>
                    <p className="text-sm mb-1"><strong>Capital:</strong> {capital?.[0] || "No definida"}</p>
                    <p className="text-sm mb-1"><strong>Región:</strong> {region} - {subregion}</p>
                </div>
                <div className="flex justify-center pb-1">
                    <Link className="text-cyan-400 bg-blue-950 text-xs p-3 rounded" to={`/country-detail/${name.common}`}>VER DETALLE</Link>
                </div>
            </article>
        )
}

export default card