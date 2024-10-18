import Hero from "@/components/home/Hero"
import ProductList from "@/components/products/ProductList"
import { Button } from "@/components/ui/button"

function HomePage(){
  return (
    <>
      <Hero/>
      <ProductList></ProductList>
    </>
  )
}

export default HomePage