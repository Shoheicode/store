import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaRegFileCode } from "react-icons/fa";

export default function Logo() {
  return (
    <Button>
        <Link href='/'>
            <FaRegFileCode className='w-6 h-6'/> 
        </Link>
    </Button>
  )
}
