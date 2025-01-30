import styles from './nav.module.css'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"


function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
      <nav className={styles.navBar}>
          <Link to='/' onClick={toggleMenu}>
            <img className={styles.navLogo} src="assets/logo/legekrogen_logo.png" alt="Logo" />
          </Link>

          <div className={styles.hamburger} onClick={toggleMenu}>
              {isOpen ? ( <RxCross2 size={30} /> ) : ( <GiHamburgerMenu size={25} /> )}
          </div>

          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            <NavLink to='/products' onClick={toggleMenu}>Produkter</NavLink>
            <NavLink to='/faq' onClick={toggleMenu}>FAQ</NavLink>
            <NavLink to='/kundeklubben' onClick={toggleMenu}>Kundeklubben</NavLink>
          </ul>
      </nav>
    )
}

export default NavBar