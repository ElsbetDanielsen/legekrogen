import ToysCard from "../productcard/ToysCard"
import fetchProducts from "../../hooks/dataFetch"
import styles from "./products.module.css"

function ProductPage() {
  const { toys } = fetchProducts()

  return (
    <div className={styles.productContainer}>
        <div className={styles.heading}>
          <h2 className={styles.smallheading}>Alt Vores</h2>
          <h1 className={styles.bigheading}>LEGETØJ</h1>
        </div>

        <div className={styles.toysContainer}>
          {toys.map((toy) => (
            <ToysCard key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
  )
}

export default ProductPage