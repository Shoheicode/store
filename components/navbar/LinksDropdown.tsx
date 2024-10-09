import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import {LuAlignLeft} from 'react-icons/lu'
import Link from 'next/link'
import {Button} from '../ui/button'
import {links} from '@/utils/links'

export default function LinksDropdown() {
  return <DropdownMenu>
    <DropdownMenuTrigger></DropdownMenuTrigger>
  </DropdownMenu>
}
