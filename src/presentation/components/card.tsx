import type { Pais } from "../../application/types/Pais";

const card = (
    {
        name,
        capital,
        region,
        subregion,
        languages,
        flags,
        population,
        area,
        currencies,
    }: Pais) => {
        const idioma = Object.values(languages).join(", ");
        const moneda = Object.values(currencies)[0]?.name || "N/A";
        const simbolo = Object.values(currencies)[0]?.symbol || "";
        return (
            <>
            <article className="bg-white text-black rounded-lg shadow-md overflow-hidden w-auto hover:scale-105 transition-transform duration-300">
            <img
                className="w-full h-48 object-cover"
                src={flags.png}
                alt={`Bandera de ${name.official}`}
            />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-center">{name.official}</h3>
                <p className="text-sm mb-1"><strong>Capital:</strong> {capital?.[0] || "No definida"}</p>
                <p className="text-sm mb-1"><strong>Región:</strong> {region} - {subregion}</p>
                <p className="text-sm mb-1"><strong>Idioma:</strong> {idioma}</p>
                <p className="text-sm mb-1"><strong>Moneda:</strong> {moneda} {simbolo}</p>
                <p className="text-sm mb-1"><strong>Población:</strong> {population.toLocaleString()}</p>
                <p className="text-sm mb-1"><strong>Área:</strong> {area.toLocaleString()} km²</p>
            </div>
            </article>
            </>
        )
}

export default card