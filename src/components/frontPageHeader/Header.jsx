import styles from "./header.module.css"

function Header() {

  return (
      <div className={styles.heroContainer}>
          <header>
              <h1>At lege er at leve</h1>
              <p>Vi har et stort udvalg af legetøj i høj kvalitet</p>
          </header>
      </div>

  )
}

export default Header