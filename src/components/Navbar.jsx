/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import reactLogo from '../assets/react.svg'
import '../App.css'

const Navbar = ({ cartCount, openCart }) => {
    
    const classLink = ({isActive}) => isActive
    ? 'rounded-lg bg-slate-950 p-2 hover:bg-slate-800 duration-300'
    : 'rounded-lg p-2 hover:bg-slate-800 duration-300' 
    

  return (
    <>
        <nav>
            <div>
                <div className="flex bg-orange-500 justify-between items-center text-white">
                    <NavLink to="">
                        <img src={reactLogo} alt="Logo" className="logo" />
                    </NavLink>
                    <div className="flex gap-3 relative pr-5 h-full w-9/12 mr-5 justify-end p-2 items-center">
                        <NavLink to="/" className={classLink}>
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/products" className={classLink}>
                            <span>Products</span>
                        </NavLink>
                        <button onClick={openCart} className="hover:bg-slate-950 p-2 rounded-lg">
                            <span className="items-number text-xs font-bold absolute right-3 top-2 bg-black py-1 px-2 rounded-full">{cartCount}</span>
                            <span><i className="fa-solid fa-bag-shopping text-xl"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar