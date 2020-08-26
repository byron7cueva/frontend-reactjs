import React from 'react'
import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <footer>Este es el footer</footer>

    <style jsx>{`
      div {
        background-color: salmon;
      }
    `}</style>
  </div>
)

export default Layout
