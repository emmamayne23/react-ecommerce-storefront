/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Cart = ({ isOpen, closeCart, cartItems, removeItem, totalPrice }) => {

  return (
    <>
        <div>
            <div className={`bg-slate-800 text-white h-lvh p-5 py-20 fixed top-0 right-0 w-10/12 max-w-lg overflow-y-auto flex flex-col gap-3 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={closeCart} className="underline hover:text-orange-400 duration-200 absolute top-0 left-5 my-2">Close</button>
                <div className="border p-2 text-center">
                    <span>Ready to check-out?</span>
                </div>
                <div>
                    <span>Total: <span className="text-green-500">${totalPrice}</span></span>
                </div>
                <div className="">
                    <span className="">Promotions</span> <br />

                    <div className="flex justify-between">
                        <input type="text" 
                        placeholder="Enter Coupon" 
                        className="p-1 focus:outline-none w-full" 
                        />
                        <input type="submit"
                        value="Apply" 
                        className="border py-1 px-4"
                        />
                    </div>
                </div>
                { cartItems.length === 0 ? (
                    <div className="text-center">Your cart is empty</div>
                ) : (
                    <div>
                    <span>Your Cart</span>

                    <div className="border">
                        <div>
                            { cartItems.map((item, index) => (
                                <div key={index} className="flex flex-col justify-between px-2">
                                    <div className="border w-full px-2 py-2 flex justify-between items-center gap-2 my-1">
                                        <h1>{item.name}</h1>
                                        <span>{item.price}</span>
                                        {/*<button 
                                            onClick={() => updateItemQuantity(item.id, -1)} 
                                            className="border px-1.5"
                                            disabled={item.quantity <= 1}
                                            >
                                            -
                                        </button>*/}
                                        <input 
                                            type="text" 
                                            value={item.quantity} 
                                            readOnly 
                                            className="w-5 text-center focus:outline-none bg-transparent"
                                        />
                                        {/*<button 
                                            onClick={() => updateItemQuantity(item.id, 1)} 
                                            className="border px-1"
                                            >
                                            +
                                        </button>*/}
                                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:underline"><i className="fas fa-times"></i></button>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
                )

                 }

                <Link to="/">
                    <button className="p-3 bg-violet-600 w-full my-5">Checkout</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Cart