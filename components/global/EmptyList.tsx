import React from 'react'

function EmptyList({heading = 'No items found.', className} : {heading?:string, className?:string}) {
  return (
    <div>EmptyList</div>
  )
}

export default EmptyList