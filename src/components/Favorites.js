import Title from "components/ui/Title"
import { useState, useEffect } from "react"
import Products from "api/products.json"
import Product from "./ui/Product";

export default function Favorites() {
  const [product,setProducts] = useState([]);
  useEffect(()=>{
    setProducts(Products);
  }, [])

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {product.length && product.map((product, index) => <Product key={product.id} product={product}/> )}
      </div>
    </div>
  )
}
