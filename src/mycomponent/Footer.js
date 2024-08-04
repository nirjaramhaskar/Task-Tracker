import React from 'react'

export const Footer = () => {
  let footerstyle = {
    position: "relative",
    top: "70vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light py-3' style=
    {footerstyle}>
      <p className='text-center'>    
        copyright &copy; MyTasksList.com
      </p>
  
    </footer>
  )
}


