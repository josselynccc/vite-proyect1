import { useEffect, useMemo, useState } from "react";
import { useGetPaisesQuery } from "../../application/services/apiCountry";
import type { Country } from "../../application/types/Country";
import Card from "../components/countries/CountryCard";
import Filter, { type FormInputFilter } from "../components/countries/Filter";

const ITEMS_PER_PAGE = 10;

const PaisesSection = () => {
    const { data: paises, isLoading, error } = useGetPaisesQuery();
    const [buscar, setBuscar] = useState<FormInputFilter>({});
    const [currentPage, setCurrentPage] = useState(1);

    //problema: cuando filtro y me encuentro en la pagina 30 y es mayor a mi filtro me devuelve vacio

    const paisesFiltrados = useMemo(() => {
        if (!paises) return [];
        
        return paises.filter((pais) => {
            const nombre = pais.name.official.toLowerCase();
            const region = pais.region.toLowerCase();
            const buscarNombre = buscar.name?.toLowerCase() || '';
            const buscarRegion = buscar.region?.toLowerCase() || '';

            return (
                (buscarNombre === '' || nombre.includes(buscarNombre)) &&
                (buscarRegion === '' || region.includes(buscarRegion))
            );
        });
    }, [paises, buscar.name, buscar.region]);

    useEffect(() => {
        setCurrentPage(1);
    }, [buscar.name, buscar.region]);

    const { totalItems, totalPages } = useMemo(() => {
        const totalItems = paisesFiltrados.length
        return {
            totalItems,
            totalPages: Math.ceil(totalItems / ITEMS_PER_PAGE)
        };
    }, [paisesFiltrados]);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return paisesFiltrados.slice(startIndex, endIndex);
    }, [currentPage, paisesFiltrados]);

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    if (isLoading) return <p className="text-white">Cargando países...</p>;
    if (error) return <p className="text-white">Error al llamar la Api...</p>;
  
    return(
        <>
        <Filter onFiltrar={setBuscar}/>
        <div className="text-white p-4">
                Mostrando {(currentPage - 1) * ITEMS_PER_PAGE + 1}-
                {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)} de {totalItems} países
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                {currentItems.map((pais: Country, index: number) => (
                    <Card key={index} {...pais} />
                ))}
            </div>
            
            {totalPages >= 1 && (
                <div className="flex justify-center gap-2 p-4">
                    <button onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="text-sm px-4 py-2 bg-amber-400 text-white rounded disabled:bg-gray-500"
                    >
                        Anterior
                    </button>
                    
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button key={page}
                            onClick={() => goToPage(page)}
                            className={`w-10 rounded hover:bg-amber-400 hover:text-white ${
                                page === currentPage 
                                    ? 'bg-amber-500 text-white' 
                                    : 'bg-amber-50 text-black'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    
                    <button onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className=" text-sm px-4 py-2 bg-amber-400 text-white rounded disabled:bg-gray-500"
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </>
    )
}

export default PaisesSection