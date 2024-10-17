import { Link } from "react-router-dom"

const ViewAllButton = () => {
  return (
    <>
        <div className="text-center p-3">
            <Link to="/products">
                <button className="w-full max-w-lg p-3 my-2 bg-black hover:bg-slate-700 duration-300 text-white rounded-lg">
                    View All Products
                </button>
            </Link>
        </div>
    </>
  )
}

export default ViewAllButton