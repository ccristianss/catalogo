import React from "react";
import { useState, useEffect } from "react";
import Card_propietarios from "../../Components/Card_propietarios";

function Propietarios() {


    const [propietarios, setPropietarios] = useState(null);

    useEffect(() => {
        fetch("https://kaoxdc.pythonanywhere.com/api/propietario/")
            .then(r => r.json())
            .then(d => console.log(setPropietarios(d)))
    }, [])


    return (

        <>
            <div className='grid gap-1 grid-cols-4 w-full max-w-screen-xl my-4'>

                {propietarios?.map(p => (
                    <Card_propietarios key={p.id} propietario={p} />
                ))}
            </div>
        </>
    );
};

export default Propietarios;