import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";

export default function CartButton() {
    // temp
    const numItemsInCard = 9
    return (
        <Button asChild>
            <Link href='/'>
             <CiShoppingCart />
            </Link>
        </Button>
    )
}
