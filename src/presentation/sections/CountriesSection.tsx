import { useEffect, useMemo, useState } from "react"
import { useGetPaisesQuery } from "../../application/services/apiCountry"
import type { Country } from "../../application/types/Country"
import Card from "../components/countries/CountryCard"
import Filter, { type FormInputFilter } from "../components/countries/Filter"

import { HiArrowRightCircle } from "react-icons/hi2"
import { HiArrowLeftCircle } from "react-icons/hi2"
import { FaAngleDoubleRight } from "react-icons/fa"
import { FaAngleDoubleLeft } from "react-icons/fa"

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
                <div className="flex justify-center items-center gap-2 p-4">
                    <button onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="text-amber-400  rounded-full w-8 disabled:text-gray-500 hover:text-amber-50"
                    ><HiArrowLeftCircle className="w-full h-full " /></button>

                    {/*primera pagina*/}
                    <button
                    onClick={() => goToPage(1)}
                    className={`w-10 rounded ${
                        1 === currentPage 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-amber-50 text-black hover:bg-amber-400 hover:text-white'
                    }`}
                    >
                    1
                    </button>

                    {/* mostrar punto si estoy en la pagina 4*/}
                    {currentPage > 3 && <FaAngleDoubleLeft className="text-white" />}

                    {/* mostrar pagina anterior a la actual */}
                    {currentPage > 2 && currentPage <= totalPages - 1 && (
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        className="w-10 rounded bg-amber-50 text-black hover:bg-amber-400 hover:text-white"
                    >
                        {currentPage - 1}
                    </button>
                    )}

                    {/* mostrar pagina actual*/}
                    {currentPage > 1 && currentPage < totalPages && (
                    <button
                        onClick={() => goToPage(currentPage)}
                        className="w-10 rounded bg-amber-500 text-white"
                    >
                        {currentPage}
                    </button>
                    )}

                    {/* mostrar pagina siguiente a la actual */}
                    {currentPage < totalPages - 1 && currentPage >= 1 && (
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        className="w-10 rounded bg-amber-50 text-black hover:bg-amber-400 hover:text-white"
                    >
                        {currentPage + 1}
                    </button>
                    )}

                    {/* Mostrar puntos suspensivos si estamos lejos de la última página */}
                    {currentPage < totalPages - 2 && <FaAngleDoubleRight className="text-white"/>}

                    {/* Siempre mostrar última página (si es diferente de la primera) */}
                    {totalPages > 1 && (
                    <button
                        onClick={() => goToPage(totalPages)}
                        className={`w-10 rounded ${
                        totalPages === currentPage 
                            ? 'bg-amber-500 text-white' 
                            : 'bg-amber-50 text-black hover:bg-amber-400 hover:text-white'
                        }`}
                    >
                        {totalPages}
                    </button>
                    )}

                    <button onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="text-amber-400 rounded-full w-8 disabled:text-gray-500 hover:text-amber-50"
                    ><HiArrowRightCircle className="w-full h-full "/></button>
                </div>
            )}
        </>
    )
}

export default PaisesSection