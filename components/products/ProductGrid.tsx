import React from 'react'
import { Product } from '@prisma/client'
import { formatCurrency } from '@/utils/format'
import Link from 'next/link'
import { Card, CardContent } from '../ui/card'

function ProductGrid({products}:{products: Product[]}) {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2'>
      {products.map((product)=>{
        const {name,price,image} = product
        const productID = product.id
        const dollarAmount = formatCurrency(price)
        return <article key={productID} className='group relative'>
          <Link href={`/products/${productID}`}>
            <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
              <CardContent className='p-4'>
                <div className='realive h-64 md:-h48 rounded overflow-hidden'></div>
              </CardContent>
            </Card>
          </Link>

        </article>
      })
      }
    </div>
  )
}

export default ProductGrid