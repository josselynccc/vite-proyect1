import Menu  from "../components/menu/Menu"
import '../../index.css'
import { ImFacebook2, ImTwitter, ImInstagram } from "react-icons/im";
const Header = ()=>{
    return (
        <>
        <div className="flex flex-row h-[18vh] justify-between bg-sky-950">
            <div className="w-50 rounded-br-full p-2">
                <img className="h-full rounded-br-full shadow-lg" src="https://www.marketingdirecto.com/wp-content/uploads/2012/03/logos-paises-mundo.png" alt="logoPais" />
            </div>
            <div className="bg-sky-950 w-full p-2 ">
                <Menu/>
            </div>
            {/* iconos de react */}
            <div className="w-auto fixed top-30 right-0 h-auto flex flex-col 
                            bg-black p-2 rounded justify-center items-center m-2 gap-3 z-50
                              md:relative md:top-auto md:right-auto md:flex-row md:bg-sky-950">
                <button type="button" className="w-10 h-10 rounded-full" >
                    <ImFacebook2 className="w-10 h-10 bg-blue-600 text-amber-50 rounded"/>
                </button>
                <button type="button" className="w-10 h-10 rounded-full" >
                    <ImInstagram className="w-10 h-10 bg-amber-600 text-amber-50 rounded"/>
                </button>
                <button type="button" className="w-10 h-10 rounded-full" >
                    <ImTwitter className="w-10 h-10 bg-cyan-600 text-amber-50 rounded"/>
                </button>
            </div>
        </div>
        <div className="w-full h-[1vh] bg-sky-950 flex justify-center">
            <div className="w-3/4 bg-white mt-2"></div>
        </div>
        </>
    )
}

export default Header