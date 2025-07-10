import { useState } from "react";
import { useGetPaisesQuery  } from "../../application/services/apiPais";
import type { Pais } from "../../application/types/Pais";
import Card from "../components/card";
import Filter, { type FormInputFilter } from "../components/Filter";
const PaisesSection = ()=>{

    const { data: paises, isLoading, error } = useGetPaisesQuery()

    const [buscar, setBuscar] = useState<FormInputFilter>({})

    if (isLoading) return <p className="text-white">Cargando países...</p>
    if (error) return <p className="text-white">Error al llamar la Api...</p>

    const paisesFiltrados = paises?.filter((pais)=>{
        const nombre = pais.name.official.toLowerCase();
        const region = pais.region.toLowerCase();

        return(
            (!buscar.name || nombre.includes(buscar.name.toLowerCase())) &&
            (!buscar.region || region.includes(buscar.region.toLowerCase()))
        )
    })
    return(
        <>
        <Filter onFiltrar={setBuscar}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {paisesFiltrados?.map((pais: Pais, index: number) => (
                <Card key={index} {...pais} />
            ))}
        </div>
        </>
    )
}

export default PaisesSection