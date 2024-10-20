import React from 'react'
import { Product } from '@prisma/client'

function ProductGrid({products}:{products: Product[]}) {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2'>
      {products.map((product)=>{
        
        return "hello"
      })
      }
    </div>
  )
}

export default ProductGrid