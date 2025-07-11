import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form";

export interface FormInputFilter {
    name?: string,
    region?: string
}

interface FilterProp{
    onFiltrar: (data:FormInputFilter) => void
}

const Filter = ({onFiltrar}: FilterProp)=>{
    const {register, handleSubmit, reset, watch} = useForm<FormInputFilter>()

    const name = watch("name");
    const region = watch("region");

    const onSubmit: SubmitHandler<FormInputFilter> = (data) => {
        onFiltrar(data)
        reset()
    }

    const onClean: VoidFunction = ()=>{reset(); onFiltrar({})}
    return(
        <>
        <div className="w-full h-full text-cyan-400 p-10 flex flex-col items-center" >
            <h1 className="text-white font-bold text-2xl mb-5">FILTRAR</h1>
            <form className=" flex flex-col items-center gap-2.5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre del país:</label>
                    <input className="w-50 ml-5 bg-amber-50 text-black hover:bg-amber-400 rounded disabled:bg-gray-500" type="text" {...register("name")} disabled={!!region}/>
                </div>
                <div>
                    <label>Región:</label>
                    <input className="w-50 ml-5 bg-amber-50 text-black hover:bg-amber-400 rounded disabled:bg-gray-500" type="text" {...register("region")} disabled={!!name}/>
                </div>
                <input className="hover:bg-amber-400 hover:text-white w-50 bg-blue-950 rounded" type="submit" value="Buscar"/>
                <button type="button" className="hover:bg-amber-400 hover:text-white w-50 bg-blue-950 rounded" onClick={onClean}>Limpiar</button>
            </form>
        </div>
        <div className="w-full flex justify-center">
            <div className="w-4/5 h-0.5 bg-white mt-2"></div>
        </div>
        </>
    )
}

export default Filter