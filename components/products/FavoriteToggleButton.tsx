import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Button } from '../ui/button'

//Heart Button
function FavoriteToggleButton({productID}:{productID:string}) {
  return (
    <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
      <FaHeart/>
    </Button>
  )
}

export default FavoriteToggleButton