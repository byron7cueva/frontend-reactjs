import React from 'react'
import Navbar from '@components/Navbar/Navbar'

// CSS Module
import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Navbar />
    {children}
    <footer>Este es el footer</footer>
  </div>
)

export default Layout
