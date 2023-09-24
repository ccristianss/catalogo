import { useContext } from "react";
import { CartContext } from "../../Context";


const Card = ({ product }) => {

    const context = useContext(CartContext);

    const addProductsToCart = (event, product) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, product])
    }

    const showProduct = (p) => {
        context.setProductToShow(p)
    }

    return (
        <div
            className="bg-white cursor-pointer m-2 w-56 h-60 rounded-lg"
            onClick={() => showProduct(product)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <img src={product.images[0]} alt="" srcSet="" className="w-full h-full object-cover rounded-lg" />
                <span className="absolute bottom-0 left-0 flex justify-center items-center bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {""}{product.category.name}{""}
                </span>
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductsToCart(event, product)}
                >
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.title}</span>
                <span className="text-lg font-medium">
                    ${product.price}
                </span>
            </p>
        </div>
    );
};
export default Card;