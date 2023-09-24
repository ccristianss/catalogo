import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card_Vehiculos_Home from "../../Components/Card_Vehiculos_Home";


function Home() {

    const [vehiculo, setVehiculos] = useState(null);

    useEffect(() => {
        fetch("https://kaoxdc.pythonanywhere.com/api/carro/")
            .then(r => r.json())
            .then(d => console.log(setVehiculos(d)))
    }, [])

    return (
        <>
            <Layout>
                <div className='grid gap-1 grid-cols-2 w-full max-w-screen-xl my-4'>
                    {vehiculo?.map(v => (
                        <Card_Vehiculos_Home key={v.id} vehiculo={v} />
                    ))}
                </div>
            </Layout>
        </>
    );
}

export default Home;