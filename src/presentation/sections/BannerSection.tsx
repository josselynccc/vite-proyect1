import { useEffect, useState } from "react";
import { useGetPaisesQuery } from "../../application/services/apiCountry";
import type { Country } from "../../application/types/Country";
import Banner from "../components/inicio/Banner";
const BannerSection = ()=>{
    const { data: paises, isLoading } = useGetPaisesQuery();
    const [currentIndex, setCurrentIndex] = useState(0);

    const paisesFiltrados = paises?.slice(0,10) || []
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex: number) => 
                prevIndex === paisesFiltrados.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [paisesFiltrados.length]);
    
    if (isLoading) return <p className="text-white">Cargando países...</p>;
    
    return(
        <>
        <div className="relative w-full h-full overflow-hidden">
            <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {paisesFiltrados.map((pais: Country, index: number) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <Banner {...pais} />
                    </div>
                ))}
            </div>
            
            {/* Indicadores */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {paisesFiltrados.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
        </>   
    )
}

export default BannerSection