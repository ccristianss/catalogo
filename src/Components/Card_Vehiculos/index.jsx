import React from "react";
import { useState, useEffect } from "react";
const Card_Vehiculos = ({ vehiculo }) => {

    var urld = "https://kaoxdc.pythonanywhere.com/api/propietario/" + vehiculo.propietario + "/";
    console.log(urld)


    const [propietario, setPropietario] = useState({});
    useEffect(() => {
        fetch(urld)
            .then(r => r.json())
            .then(d => console.log(setPropietario(d)))
    }, [])



    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto my-4">
            <img className="w-full" src={vehiculo.photo} alt={vehiculo.marca} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Detalles del Vehículo</div>
                <p className="hidden"><strong>ID:</strong> {vehiculo.id}</p>
                <p><strong>Referencia:</strong> {vehiculo.referencia}</p>
                <p><strong>Marca:</strong> {vehiculo.marca}</p>
                <p><strong>Modelo:</strong> {vehiculo.modelo}</p>
                <p><strong>Placa:</strong>{vehiculo.placa}</p>
                <p><strong>Precio:</strong>{vehiculo.precio}</p>
                <p><strong>Estado:</strong> {vehiculo.estado}</p>
                <p><strong>Propietario:</strong>{propietario.nombres}</p>
            </div>
        </div>
    );
};
export default Card_Vehiculos;