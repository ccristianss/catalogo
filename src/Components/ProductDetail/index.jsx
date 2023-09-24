import { useContext } from "react"
import { CartContext } from "../../Context"
import './style.css'

const ProductDetail = () => {
    const context = useContext(CartContext);
    const p = context.productToShow;

    return (
        <aside
            className="checkout-side-menu flex flex-col right-0 border border-black rounded-lg fixed bg-white"
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>{p.description}</h2>

            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg'
                    src={p.images}
                    alt={p.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${p.price}</span>
                <span className='font-medium text-md'>{p.title}</span>
                <span className='font-light text-sm'>{p.description}</span>

            </p>
        </aside>
    )

}
export default ProductDetail