import React from 'react'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'

export default function DarkMode() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant='outline' size='icon'>

            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
