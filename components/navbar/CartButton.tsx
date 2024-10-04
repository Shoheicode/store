import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";

export default async function CartButton() {
    // temp
    const numItemsInCard = 9
    return (
        <Button asChild variant='outline' size='icon'
        className='flex justify-center items-center relative'
        >
            <Link href='/cart'>
             <CiShoppingCart />
             <span>

             </span>
            </Link>
        </Button>
    )
}
