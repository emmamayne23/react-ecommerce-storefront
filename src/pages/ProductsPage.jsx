import Products from "../components/Products"
import Hero from "../components/Hero"

const ProductsPage = () => {
  return (
    <>
        <Hero message="Our Products" bg="bg-green-400" />
        <Products limit={false} />
    </>
  )
}

export default ProductsPage