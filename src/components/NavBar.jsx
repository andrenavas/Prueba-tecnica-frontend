import Logo from "../assets/img/only-books-logo.png"
import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="bg-white text-black duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary py-2">
        <p> Announcement bar</p>
      </div>
      <div className="bg-secondary py-2">
        <div className="container flex justify-between items-center p-5">
          <div>
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo"
               className="w-25" />
            </a>
          </div>
          {/* buscador y boton */}
          <div>
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="search" className="w-[500px] sm:w-[200px]group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary ml-10"/>
             <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" /> 
            </div>
          </div>
        <div>
          {/* icono usuario */}
          <button className="bg-primary to secundary py-1 px-5 rounded-full ">
            <FaRegUser />
          </button>
          <button>
            <FaEllipsisV />
          </button>
        </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar;