import { fetchAllProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from '../global/EmptyList'

async function FeaturedProducts() {
  const products = await fetchAllProducts()
  if(products.length == 0) return <EmptyList/>
  return (
    <section>
      
    </section>
  )
}

export default FeaturedProducts