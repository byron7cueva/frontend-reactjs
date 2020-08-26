import React from 'react'
import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
    <footer>Este es el footer</footer>
  </div>
)

export default Layout
