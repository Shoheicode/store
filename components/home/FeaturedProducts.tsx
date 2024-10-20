import { fetchAllProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductGrid from '../products/ProductGrid'

async function FeaturedProducts() {
  const products = await fetchAllProducts()
  if(products.length == 0) return <EmptyList/>
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products'/>
      <ProductGrid />
    </section>
  )
}

export default FeaturedProducts