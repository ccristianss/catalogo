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


    return (
        <>
            <div className='grid gap-1 grid-cols-4 w-full max-w-screen-xl my-4'>
                {vehiculo?.map(v => (
                    <Card_Vehiculos key={v.id} vehiculo={v} />
                ))}
            </div>
        </>
    );
};

export default Vehiculos;