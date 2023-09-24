import React from "react";
import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";


function Home() {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products/")
            .then(r => r.json())
            .then(d => console.log(setProducts(d)))
    }, [])
    /*
        fetch("https://api.escuelajs.co/api/v1/products/")
            .then((r) => {
                return r.json();
            }).then((d) => {
    
                const listProducts = d.map((p) => {
                    return <Card key={p.id} product={p} />
                });
                setProducts(listProducts);
            });
      */
    return (
        <>
            Home
            <Layout>
                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {products?.map(p => (
                        <Card key={p.id} product={p} />
                    ))}
                </div>
                <ProductDetail />
            </Layout>
        </>
    );
}

export default Home;