import React from "react";
const Card_Vehiculos_Home = ({ vehiculo }) => {

    return (
        <div className="max-w-screen-lg rounded overflow-hidden shadow-lg mx-auto">
            <img className="w-full h-fit" src={vehiculo.photo} alt={vehiculo.marca} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{vehiculo.marca} {vehiculo.modelo}</div>
                <p><strong>{vehiculo.referencia}</strong> </p>
            </div>
        </div>
    );
};
export default Card_Vehiculos_Home;