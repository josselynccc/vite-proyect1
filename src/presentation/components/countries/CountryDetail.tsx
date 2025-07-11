import {useParams } from "react-router-dom"
import { useGetPaisesQuery } from "../../../application/services/apiCountry"

const CountryDetail = ()=>{
    const {nameCommon} = useParams<{nameCommon:string}>()
    const { data: countries, isLoading, error } = useGetPaisesQuery()

    if (isLoading) return <p className="text-white">Cargando países...</p>
    if (error) return <p className="text-white">Error al llamar la Api...</p>
    
    const country = countries?.find(
        (c) => c.name.common?.toLowerCase() === nameCommon?.toLowerCase()
    )

    console.log(country)

    if (!country) return <p className="text-white">País no encontrado</p>
    
    const idioma = Object.values(country.languages).join(", ")
    const moneda = Object.values(country.currencies)[0]?.name || "N/A"
    const simbolo = Object.values(country.currencies)[0]?.symbol || ""
    return(
        <div className="w-full h-full flex justify-center">
            <div className="3/4 md:w-2/4 h-auto flex flex-col items-center md:flex-row justify-between md:pl-10 md:pr-10 shadow-md">
                <img
                className="w-100 h-full object-cover"
                src={country.flags.png}
                alt={`Bandera de ${country.name.official}`}
                />

                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-center">{country.name.official}</h3>
                    <p className="text-sm mb-1"><strong>Capital:</strong> {country.capital?.[0] || "No definida"}</p>
                    <p className="text-sm mb-1"><strong>Región:</strong> {country.region} - {country.subregion}</p>
                    <p className="text-sm mb-1"><strong>Idioma:</strong> {idioma}</p>
                    <p className="text-sm mb-1"><strong>Moneda:</strong> {moneda} {simbolo}</p>
                    <p className="text-sm mb-1"><strong>Población:</strong> {country.population.toLocaleString()}</p>
                    <p className="text-sm mb-1"><strong>Área:</strong> {country.area.toLocaleString()} km²</p>
                </div>
            </div>
        </div>
            
    )
}
export default CountryDetail