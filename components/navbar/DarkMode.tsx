import React from 'react'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { SunIcon } from '@radix-ui/react-icons'

export default function DarkMode() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant='outline' size='icon'>
                <SunIcon
                    className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
                />
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
