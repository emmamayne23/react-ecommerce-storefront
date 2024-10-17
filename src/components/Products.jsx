/* eslint-disable react/prop-types */
import products from '../../products.json'
import Product from './Product'
import { useOutletContext } from 'react-router-dom'


const Products = ({ limit = true }) => {

    const recentProducts = products.slice(0, limit ? 5 : (products.length))
    const { addItemToCart } = useOutletContext();

  return (
    <>
        <div>
            <div>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
                    {recentProducts.map((product) => (
                        <Product key={product.id} product={product} addItemToCart={addItemToCart} />
                    ))}
                </div> 
            </div>
        </div>
    </>
  )
}

export default Products