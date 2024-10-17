/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import image from '../assets/images/image5.png'
import { useOutletContext } from "react-router-dom";

const Product = ({ product }) => {

    const { addItemToCart } = useOutletContext();

    
  return (
    <>
        <div className='grid place-items-center p-5'>
            <div className='border shadow-current shadow-sm rounded-xl m-1 w-10/12 p-3'>
                <Link to={`/product/${product.id}`}>
                    <img src={image} 
                    alt={product.name} 
                    className='w-full rounded-xl'
                    />  
                </Link>
                
                <div className='flex justify-between'>
                    <span className='font-bold text-lg'>{product.name}</span>
                    <span className='text-gray-600 text-sm'>${product.price}</span>
                </div>
                <div>
                <span className='text-gray-400 text-sm'>{product.description}</span>
                </div>
                <div className='flex justify-between'>
                    <div className=' text-yellow-500'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <div>
                        <span className='border p-1 font-semibold rounded-lg'>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                </div>
                <button onClick={() => addItemToCart(product)} className='w-full bg-green-500 my-4 rounded-lg p-2 text-white hover:bg-green-700 duration-300'>
                    Add To Cart
                </button>
            </div>
        </div>
    </>
  )
}

export default Product