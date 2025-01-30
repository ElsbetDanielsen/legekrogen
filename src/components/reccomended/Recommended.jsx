import styles from "./recommended.module.css"
import RecommendedProducts from "../../hooks/dataFetchRecommended"
import ToysCard from "../productcard/ToysCard"

function Recommended() {
  const { toys } = RecommendedProducts()

  return (
      <div className={styles.productContainer}>
          <div className={styles.heading}>
              <h2>Et udpluk af vores</h2>
              <h1>LEGETØJ</h1>
          </div>
          
          <div className={styles.toysContainer}>
              {toys.map((toy) => (
                <ToysCard key={toy._id} toy={toy} />
              ))}
          </div>
      </div>
    )
}

export default Recommended