import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context";

const Navbar = () => {

    const context = useContext(CartContext)
    console.log(context.cartProducts)
    console.log(context.productToShow)

    const activeStyle = 'underline underline-offset-4';

    return (
        <div className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light bg-cyan-950 text-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg gap-3">
                    <NavLink to='/'
                    className={({isActive}) => isActive ? activeStyle: undefined}>
                        Catalogo
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => isActive ? activeStyle: undefined}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'
                    className={({isActive}) => isActive ? activeStyle: undefined}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/propietarios'
                    className={({isActive}) => isActive ? activeStyle: undefined}>
                        Propietarios
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/vehiculos'
                    className={({isActive}) => isActive ? activeStyle: undefined}>
                        Vehiculos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/*'
                    className={({isActive}) => isActive ? activeStyle: undefined}>
                        Not Found
                    </NavLink>
                </li>
                <li>
                    { context.count }
                </li>
            </ul>
        </div>
    );

};

export default Navbar;