import { useGetPaisesQuery } from "../../application/services/apiCountry";
import type { Country } from "../../application/types/Country";
import Card from "../components/countries/CountryCard";

const Banner = ()=>{
    const { data: paises, isLoading } = useGetPaisesQuery();
    if (isLoading) return <p className="text-white">Cargando países...</p>;

    const paisesFiltrados = paises?.slice(0,10)

    return(
            <div className="w-full h-100">
                {paisesFiltrados?.map((pais: Country, index: number) => (
                    <Card key={index} {...pais} />
                ))}
            </div>
    )
}

export default Banner