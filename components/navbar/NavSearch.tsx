import { Input } from '../ui/input'
import React from 'react'

export default function NavSearch() {
  return (
    <Input 
        type="search"
        placeholder='search product...'
        className='max-w-xs dark:bg-muted'
    >
    </Input>
  )
}
