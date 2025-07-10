import Menu  from "../components/Menu"
import '../../index.css'
const Header = ()=>{
    return (
        <>
        <div className="flex flex-row h-30 justify-between bg-sky-950">
            <div className="w-50 rounded-br-full p-2">
                <img className="h-full rounded-br-full shadow-lg" src="https://www.marketingdirecto.com/wp-content/uploads/2012/03/logos-paises-mundo.png" alt="logoPais" />
            </div>
            <div className="bg-sky-950 w-full p-2 ">
                <Menu/>
            </div>
            {/* iconos de react */}
            <div className="w-auto h-30 flex flex-col justify-center items-center p-2 md:flex-row">
                <button type="button" 
                className="w-10 h-10 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://img.icons8.com/?size=100&id=oLVubex7Asfc&format=png&color=000000')" }}/>
                <button type="button" 
                className="w-10 h-10 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://img.icons8.com/?size=100&id=32323&format=png&color=000000')" }}/>   
                <button type="button" 
                className="w-10 h-10 bg-cover bg-center rounded" 
                style={{ backgroundImage: "url('https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=000000')" }}/>
                
            </div>
        </div>
        <div className="w-full bg-sky-950 flex justify-center">
            <div className="w-4/5 h-0.5 bg-white mt-2"></div>
        </div>
        </>
    )
}

export default Header