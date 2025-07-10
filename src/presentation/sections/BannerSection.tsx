import { useGetPaisesQuery } from "../../application/services/apiPais";
import type { Pais } from "../../application/types/Pais";
import Card from "../components/card";

const Banner = ()=>{
    const { data: paises, isLoading } = useGetPaisesQuery();
    if (isLoading) return <p className="text-white">Cargando países...</p>;

    const paisesFiltrados = paises?.slice(0,10)

    return(
        <>
            <div className="w-full h-100">
                {paisesFiltrados?.map((pais: Pais, index: number) => (
                    <Card key={index} {...pais} />
                ))}
            </div>
        </>
    )
}

export default Banner