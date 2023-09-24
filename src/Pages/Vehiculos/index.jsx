import React from "react";
import { useState, useEffect } from "react";
import Card_Vehiculos from "../../Components/Card_Vehiculos";

function Vehiculos() {

    const [vehiculo, setVehiculos] = useState(null);

    useEffect(() => {
        fetch("https://kaoxdc.pythonanywhere.com/api/carro/")
            .then(r => r.json())
            .then(d => console.log(setVehiculos(d)))
    }, [])
/*
    const [propietarios, setPropietarios] = useState(null);

    useEffect(() => {
        fetch("https://kaoxdc.pythonanywhere.com/api/propietario/")
            .then(r => r.json())
            .then(d => console.log(setPropietarios(d)))
    }, [])
    */


    return (
        <>
            Vehiculos
            <div>
                {vehiculo?.map(v => (
                    <Card_Vehiculos key={v.id} vehiculo={v} />
                ))}
            </div>
        </>
    );
};

export default Vehiculos;