import { useParams, useOutletContext } from "react-router-dom"
import products from '../../products.json'
import Image from '../assets/images/image6.png'
import { useState } from "react"

const SingleProduct = () => {

    const { addItemToCart } = useOutletContext();

    const { id } = useParams()
    const product = products.find(item => item.id === Number(id))

    const [showFulldescription, setShowFullDescription] = useState(false)

    let description = product.detailedDescription

    if(!showFulldescription) {
        description = description.slice(0, 99) + '...'
    }

  return (
    <>
        <div className="grid place-items-center border m-3 p-3">
            <div className="">
                <img src={Image} alt={product.name} className="w-full" />
            </div>
            <div>
                <div className="flex justify-between p-1 w-full border my-1">
                    <div className="font-bold">{ product.name }</div>
                    <div className="line-through text-gray-400">${ product.price }</div>
                    <div className="font-semibold text-green-600">${ product.discountedPrice }</div>
                </div>
                <div className=" italic text-gray-500">{ description }</div>
                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-green-500 mb-5 hover:text-green-700">{ showFulldescription ? 'Less' : 'More' }</button>
                
                <div className="flex w-full justify-between border my-1">
                    <div className="border m-1 py-1 px-2 font-bold">{ product.category }</div>
                    <div className="border m-1 py-1 px-2 font-bold">{ product.brand }</div>
                </div>
            </div>
            <button onClick={addItemToCart} className='w-full bg-green-500 my-4 rounded-lg p-2 text-white hover:bg-green-700 duration-300'>
                Add To Cart
            </button>
        </div>
    </>
  )
}

export default SingleProduct