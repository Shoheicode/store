import React from 'react'

export default function Container(
    {children, className} : {
        children:React.ReactNode; 
        className?: string;}
    ) {
    return (
        <div>Container</div>
    )
}
