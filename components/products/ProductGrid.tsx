import React from 'react'
import { Product } from '@prisma/client'
import { formatCurrency } from '@/utils/format'

function ProductGrid({products}:{products: Product[]}) {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2'>
      {products.map((product)=>{
        const {name,price,image} = product
        const productID = product.id
        const dollarAmount = formatCurrency(price)
        return "hello"
      })
      }
    </div>
  )
}

export default ProductGrid